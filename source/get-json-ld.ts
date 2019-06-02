import {
    IGetJsonLd,
    WebComponentDataResolve,
    ErrorResolve
} from './types';
import queue from './queue';
import loadWebComponentData from './load-web-component-data';
import getWebComponentData from './get-web-component-data';

export default function ({ jsonLd: url }: IGetJsonLd) {return new Promise(async (resolve: WebComponentDataResolve, reject: ErrorResolve) => {
    const queueParams = {
        key: url,
        resolve,
        reject
    };

    queue(queueParams);

    try {
        await loadWebComponentData({ url });
        getWebComponentData({ key: url });
    } catch(error) {
        console.error(error);
        getWebComponentData({ key: url });
    }
})}