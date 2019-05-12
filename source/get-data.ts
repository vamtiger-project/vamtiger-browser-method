import {
    IGetData,
    ErrorMessage,
    IJsonData
} from './types';
import getJsonLd from './get-json-ld';

const { noJsonLdParameter } = ErrorMessage;

export default function({ jsonLd }: IGetData) { return new Promise((resolve: (data: IJsonData) => void, reject) => {
    const { requestIdleCallback } = window;

    if (jsonLd) {
        if (requestIdleCallback) {
            requestIdleCallback(() => getJsonLd({ jsonLd }).then(resolve));
        } else {
            getJsonLd({ jsonLd }).then(resolve);
        }
    } else {
        reject(new Error(noJsonLdParameter));
    }
})}