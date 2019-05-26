import {
    GetElementParams,
    IGetElementTemplate,
    IGetElementUrl
} from './types';
import getElementFromTemplate from './get-element-from-template';
import getElementFromUrl from './get-element-from-url';

export default async function<P extends GetElementParams>(params: P) { return new Promise((resolve: (element: HTMLElement) => void, reject) => {
    const { requestIdleCallback } = self;

    if (requestIdleCallback) {
        requestIdleCallback(() => getElement(params, resolve));
    } else {
        getElement(params, resolve);
    }
})}

export async function getElement<P extends GetElementParams> (params: P, resolve: (element: HTMLElement) => void) {
    let element: HTMLElement;

    if ((params as IGetElementUrl).url) {
        element = await getElementFromUrl(params as IGetElementUrl);
    } else {
        element = await getElementFromTemplate(params as IGetElementTemplate);
    }

    resolve(element);
}