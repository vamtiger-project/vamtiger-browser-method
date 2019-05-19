import {
    IGetJsonLd,
    IJsonData,
    JsonDataResolve
} from './types';
import loadScript from './load-script';

const { parse } = JSON;
const dataQueue = new Map<string, Set<JsonDataResolve>>();

export default function ({ jsonLd: url }: IGetJsonLd) {return new Promise(async (resolve: JsonDataResolve, reject) => {
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
    const json = jsonScript && parse(jsonScript.innerHTML) || {};
    const data: IJsonData = {
        jsonLd,
        json
    };

    let jsonDataResolve = dataQueue.get(url);

    if (jsonDataResolve) {
        jsonDataResolve.add(resolve);
    } else {
        dataQueue.set(url, new Set([resolve]));
    }

    jsonDataResolve = dataQueue.get(url);

    if (jsonDataResolve && jsonLd) {
        Array.from(jsonDataResolve).forEach(currentResolve => {
            currentResolve(data);

            (jsonDataResolve as  Set<JsonDataResolve>).delete(currentResolve);
        });

        if (!jsonDataResolve.size) {
            dataQueue.delete(url);
        }
    };
})}