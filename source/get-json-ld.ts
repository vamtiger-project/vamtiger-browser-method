import {
    IGetJsonLd,
    WebComponentDataResolve,
    ErrorResolve
} from './types';
import queue from './queue';
import loadWebComponentData from './load-web-component-data';
import getWebComponentData from './get-web-component-data';

export default function (params: IGetJsonLd) {return new Promise(async (resolve: WebComponentDataResolve, reject: ErrorResolve) => {
    const { jsonLd: url } = params;
    const jsonLd = await getJsonLd(params)
    const queueParams = !jsonLd && {
        key: url,
        resolve,
        reject
    };

    if (jsonLd) {
        resolve(jsonLd);
    } else if (queueParams) {
        queue(queueParams);

        await loadWebComponentData({ url });
        getWebComponentData({ key: url });
    }
})}

export function getJsonLd({ jsonLd: url }: IGetJsonLd) {return new Promise(async (resolve: WebComponentDataResolve, reject: ErrorResolve) => {
    const queueParams = {
        key: url,
        resolve,
        reject
    };

    queue(queueParams);

    getWebComponentData({ key: url });
})}