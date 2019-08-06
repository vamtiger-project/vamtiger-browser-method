import {
    IGetJsonData,
    IGetJsonDataWindow
} from './types';
import isWindow from './is-window';
import queue from './queue';
import saveJson from './save-json';
import saveWebComponentData from './save-web-component-data';
import getWebComponentData from './get-web-component-data';

const { requestIdleCallback } = self;

export default function (params: IGetJsonData) {return new Promise((resolve: IGetJsonDataWindow['resolve'], reject: IGetJsonDataWindow['reject']) => {
    if (requestIdleCallback) {
        if (isWindow()) {
            requestIdleCallback(() => handleJsonFromUrlWindow({...params, resolve, reject}));
        }
    } else {
        if (isWindow()) {
            setTimeout(() => handleJsonFromUrlWindow({...params, resolve, reject}), 0);
        }
    }
})}

async function handleJsonFromUrlWindow({url, json: data, dependency = false, resolve, reject}: IGetJsonDataWindow) {
    const { VamtigerBrowserMethod } = self;
    const { messageQueue } = VamtigerBrowserMethod;
    const queueParams = {
        key: url,
        queue: messageQueue,
        resolve,
        reject
    };
    const webComponentData = url && data && data.jsonLd && data.json && {
        url,
        jsonLd: data.jsonLd,
        json: data.json
    };

    queue(queueParams);

    if (data) {

        await saveJson({url, data, dependency});
    }

    if (webComponentData) {
        await saveWebComponentData(webComponentData);
    } else {
        await getWebComponentData({key: url});
    }
}