import {
    ILoadData, Selector
} from './types';
import loadScript from './load-script';
import saveWebComponentData from './save-web-component-data';
import isWindow from './is-window';

const { parse } = JSON;

export default async function (params: ILoadData) {
    return await (isWindow() && loadWebComponentData(params));
}

async function loadWebComponentData({ url }: ILoadData) {
    const { head } = document;
    const selector = `${Selector.script}[src="${url}"]`;
    const existingScript = head.querySelector(selector);
    const script = !existingScript && await loadScript({ src: url });
    const jsonLdSelector = `script[type="application/ld+json"][data-json-ld="${url}"]`;
    const jsonSelector = `script[type="application/json"][data-json-ld="${url}"]`;
    const scripts = script && await Promise.all([
        Array
            .from(head.querySelectorAll<HTMLScriptElement>(jsonLdSelector))
            .map(({ innerHTML }) => innerHTML),
        head.querySelector<HTMLScriptElement>(jsonSelector)
    ]);
    const [ jsonLdScripts, jsonScript ] = scripts || [undefined, undefined];
    const jsonLd = jsonLdScripts && jsonLdScripts.map(jsonLdScript => parse(jsonLdScript));
    const json = jsonScript && parse(jsonScript.innerHTML) || {};
    const params = jsonLd && {
        url,
        created: new Date().getTime(),
        jsonLd,
        json
    };

    params && saveWebComponentData(params);
}