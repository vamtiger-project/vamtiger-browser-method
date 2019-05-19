import {
    IGetJsonLd,
    IJsonData
} from './types';
import loadScript from './load-script';

const { parse } = JSON;

export default function({ jsonLd: url }: IGetJsonLd) {return new Promise(async (resolve: (data: IJsonData) => void, reject) => {
    const { head } = document;
    const script = await loadScript({
        src: url
    });
    const jsonLdSelector = `script[type="application/ld+json"][data-json-ld="${url}"]`;
    const jsonSelector = `script[type="application/json"][data-json-ld="${url}"]`;
    const [ jsonLd, jsonScript ] = await Promise.all([
        Array
            .from(head.querySelectorAll<HTMLScriptElement>(jsonLdSelector))
            .map(({ innerHTML }) => parse(innerHTML)),
        head.querySelector<HTMLScriptElement>(jsonSelector)
    ])
    const json = jsonScript && parse(jsonScript.innerHTML);
    const data: IJsonData = {
        jsonLd
    };

    if (json) {
        data.json = json;
    }

    resolve(data);
})}