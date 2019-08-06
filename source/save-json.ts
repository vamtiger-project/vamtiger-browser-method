import {
    ISaveJsonLd,
    ISaveJsonLdWindow,
    ILoadJsonScriptParams,
    ScriptType,
    LocalScriptParams
} from './types';
import isWindow from './is-window';
import loadScript from './load-script';

const { stringify } = JSON;
const { requestIdleCallback } = self;

export default function (params: ISaveJsonLd) {return new Promise((resolve, reject) => {
    if (requestIdleCallback) {
        requestIdleCallback(() => saveJsonLdWindow({...params, resolve, reject}));
    } else {
        setTimeout(() => saveJsonLdWindow({...params, resolve, reject}), 0);
    }
})}

async function saveJsonLdWindow({url, dependency = false, data, resolve, reject}: ISaveJsonLdWindow) {
    const { json, jsonLd } = data;
    const params = ([
        json && Object.keys(json).length && {
            name: url,
            json: stringify(json),
            jsonld: false
        } as ILoadJsonScriptParams,
        jsonLd && Object.keys(jsonLd).length && {
            name: url,
            js: stringify(jsonLd),
            jsonld: true
        } as LocalScriptParams
    ].filter(currentParams => !dependency && currentParams)) as (ILoadJsonScriptParams | LocalScriptParams)[];

    if (params.length) {
        Promise
            .all(params.map(loadScript))
            .then(resolve)
            .catch(reject);
    } else {
        resolve();
    }
}