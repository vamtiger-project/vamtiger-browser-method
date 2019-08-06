import {
    IGetJson,
    IGetJsonFromUrl
} from './types';
import queue from './queue';
import loadScript from './load-script';
import getJsonData from './get-json-data';

const { requestIdleCallback } = self;

export default async function (params: IGetJson) {
    const { json: url, dependency = false } = params;
    const json = await getJsonFromUrl(params);
    const data = await getJsonData({url, dependency, json});

    return data;
}

function getJsonFromUrl(params: IGetJson) {return new Promise((resolve: IGetJsonFromUrl['resolve'], reject: IGetJsonFromUrl['reject']) => {
    if (requestIdleCallback) {
        requestIdleCallback(() => loadJsonFromUrl({...params, resolve, reject}));
    } else {
        setTimeout(() => loadJsonFromUrl({...params, resolve, reject}));
    }
})}

function loadJsonFromUrl({json: url, resolve, reject}: IGetJsonFromUrl) {
    const { head } = document;
    const { VamtigerBrowserMethod } = self;
    const selector = `script[src="${url}"]`;
    const existingScript = head.querySelector(selector);
    const queueParams = !existingScript && {
        key: url,
        queue: VamtigerBrowserMethod.queue,
        resolve,
        reject
    };
    const loadScriptParams = queueParams && {
        name: url,
        src: url
    };

    if (queueParams && loadScriptParams) {
        queue(queueParams);

        loadScript(loadScriptParams);
    } else {
        resolve();
    }
}