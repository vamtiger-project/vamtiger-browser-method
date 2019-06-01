import {
    ILoadData
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
    const script = await loadScript({ src: url });
    const jsonLdSelector = `script[type="application/ld+json"][data-json-ld="${url}"]`;
    const jsonSelector = `script[type="application/json"][data-json-ld="${url}"]`;
    const [ jsonLdScripts, jsonScript ] = await Promise.all([
        Array
            .from(head.querySelectorAll<HTMLScriptElement>(jsonLdSelector))
            .map(({ innerHTML }) => innerHTML),
        head.querySelector<HTMLScriptElement>(jsonSelector)
    ]);
    const jsonLd = jsonLdScripts && jsonLdScripts.map(jsonLdScript => parse(jsonLdScript));
    const json = jsonScript && parse(jsonScript.innerHTML) || {};
    const params = {
        url,
        created: new Date().getTime(),
        jsonLd,
        json
    };

    saveWebComponentData(params);
}