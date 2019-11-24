import {
    IGetJsonLd,
    WebComponentDataResolve,
    ErrorResolve
} from './types';
import queue from './queue';
import loadWebComponentData from './load-web-component-data';
import getWebComponentData from './get-web-component-data';

export default function ({ jsonLd: url, loadJsonJsonLd = true }: IGetJsonLd) {return new Promise(async (resolve: WebComponentDataResolve, reject: ErrorResolve) => {
    const { queue: currentQueue } = VamtigerBrowserMethod;
    const queueParams = {
        key: url,
        queue: currentQueue,
        resolve,
        reject
    };

    queue(queueParams);

    try {
        await loadWebComponentData({ url, loadJsonJsonLd });
    } catch(error) {
        console.error(error);
    }

    getWebComponentData({ key: url });
})}