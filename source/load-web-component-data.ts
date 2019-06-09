import {
    ILoadData,
    IJsonData,
    ILoadDataGetJsonJsonLd,
    Selector,
    ILoadDataGetFeldData,
    StringConstant
} from './types';
import loadScript from './load-script';
import saveWebComponentData from './save-web-component-data';
import isWindow from './is-window';
import { removeScripts, removeDuplicateScripts } from './remove-redundant-scripts';

const { parse, stringify } = JSON;
const { comma } = StringConstant;
const emptyJsonLd = {
    jsonLd: [],
    json: {}
};

export default async function (params: ILoadData) {
    return await (isWindow() && loadWebComponentData(params));
}

async function loadWebComponentData({ url }: ILoadData) {
    const { head } = document;
    const jsonLdSelector = `script[type="application/ld+json"][data-json-ld="${url}"]`;
    const { jsonLd, json } = await getWebComponentData({ url });
    const jsonJsonLdData = json && Array.isArray(json.jsonLd) && await Promise.all((json.jsonLd as ILoadDataGetJsonJsonLd[]).map(getJsonJsonLd));
    const params = jsonLd && {
        url,
        created: new Date().getTime(),
        jsonLd,
        json
    };
    const jsonLdScript = head.querySelector<HTMLScriptElement>(jsonLdSelector);

    if (jsonJsonLdData) {
        jsonJsonLdData.forEach(currentJsonJsonLdData => currentJsonJsonLdData.forEach(({index, key, jsonLd: data}) => {
            if (jsonLd && Array.isArray(jsonLd) && jsonLd[index] && key && jsonLd[index][key] === true && data) {
                jsonLd[index][key] = data;
            }
        }));

        if (jsonLdScript && jsonLd) {
            head.removeChild(jsonLdScript);

            jsonLdScript.innerHTML = stringify(jsonLd);

            head.appendChild(jsonLdScript);
        }
    }

    params && saveWebComponentData(params);
}

async function getJsonJsonLd({ index, fields }: ILoadDataGetJsonJsonLd) {
    const keys = Object.keys(fields);
    const jsonJsonLd = await Promise.all(keys.map(key => getFieldData({key, urls: fields[key]}).then(fieldData => ({index, ...fieldData}))));

    return jsonJsonLd;
}

async function getFieldData({ urls: currentUrls, key }: ILoadDataGetFeldData) {
    const reload = true;
    const urls = Array.isArray(currentUrls) && currentUrls.filter(url => typeof url === 'string') || [];
    const webComponentData = await Promise.all(urls.map(url => getWebComponentData({ url, reload })));
    const fieldData = {
        key,
        jsonLd: webComponentData
            .map(({jsonLd}) => jsonLd)
            .filter(jsonLd => jsonLd) as IJsonData['json']
    };

    return fieldData;
}

async function getWebComponentData({ url, reload = false }: ILoadData) {
    try {
        const { head } = document;
        const selector = `${Selector.script}[src="${url}"]`;
        const jsonLdSelector = `script[type="application/ld+json"][data-json-ld="${url}"]`;
        const jsonSelector = `script[type="application/json"][data-json-ld="${url}"]`;
        const removeScriptsSelector = reload && [
            selector,
            jsonLdSelector,
            jsonSelector
        ].join(comma);
        const remove = removeScriptsSelector && await removeScripts({
            selector: removeScriptsSelector,
            parent: head
        });
        const existingScript = head.querySelector(selector);
        const script = !existingScript && await loadScript({ src: url });
        const removeDuplicates = reload && await removeDuplicateScripts({
            selector: jsonLdSelector,
            parent: head
        });
        const scripts = script && await Promise.all([
            Array
                .from(head.querySelectorAll<HTMLScriptElement>(jsonLdSelector))
                .map(({ innerHTML }) => innerHTML),
            head.querySelector<HTMLScriptElement>(jsonSelector)
        ]);
        const [ jsonLdScripts, jsonScript ] = scripts || [undefined, undefined];
        const jsonLd = jsonLdScripts && jsonLdScripts.map(jsonLdScript => parse(jsonLdScript));
        const json = jsonScript && parse(jsonScript.innerHTML) || {};
        const webComponentData = {
            jsonLd,
            json
        };

        return webComponentData;
    } catch(error) {
        console.error(error);

        return emptyJsonLd;
    }
}