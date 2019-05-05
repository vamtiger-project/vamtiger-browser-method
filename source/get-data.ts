import {
    IGetData,
    IAnyObject
} from './types';
import getJsonLd from './get-json-ld';

export default function<D extends IAnyObject> ({ jsonLd }: IGetData) { return new Promise((resolve: (data: D) => void, reject) => {
    const { requestIdleCallback } = window;

    if (jsonLd) {
        if (requestIdleCallback) {
            requestIdleCallback(() => getJsonLd<D>({ jsonLd }).then(resolve));
        } else {
            getJsonLd<D>({ jsonLd }).then(resolve);
        }
    } else {
        resolve({} as D);
    }
})}