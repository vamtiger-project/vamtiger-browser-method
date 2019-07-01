import {
    IGetData,
    ErrorMessage,
    IJsonData
} from './types';
import getJsonLd from './get-json-ld';
import viewJsonLd from './view-json-ld';

const { noJsonLdParameter } = ErrorMessage;

export default function(params: IGetData) { return new Promise(async (resolve: (data: IJsonData) => void, reject) => {
    const { requestIdleCallback } = self;
    const { textMode, jsonLd } = params;

    if (jsonLd) {
        if (textMode) {
            await viewJsonLd(params);
        }

        if (requestIdleCallback) {
            requestIdleCallback(() => getJsonLd(params).then(resolve).catch(reject));
        } else {
            setTimeout(() => getJsonLd(params).then(resolve).catch(reject), 0);
        }
    } else {
        reject(new Error(noJsonLdParameter));
    }
})}