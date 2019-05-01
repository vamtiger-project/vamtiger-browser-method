import {
    GetElementParams,
    IGetElementTemplate,
    IGetElementUrl
} from './types';
import getElementFromTemplate from './get-element-from-template';
import getElementFromUrl from './get-element-from-url';
import loadContainerStylesheets from './load-container-stylesheets';

export default async function<P extends GetElementParams>(params: P) { return new Promise((resolve: (element: HTMLElement) => void, reject) => {
    const { requestIdleCallback } = window;

    if (requestIdleCallback) {
        requestIdleCallback(() => getElement(params, resolve));
    } else {
        getElement(params, resolve);
    }
})}

export async function getElement<P extends GetElementParams> (params: P, resolve: (element: HTMLElement) => void) {
    const {
        loadStylesheets,
        name
     } = params;

     let element: HTMLElement;

     console.log(params);

    if ((params as IGetElementUrl).url) {
        element = await getElementFromUrl(params as IGetElementUrl);
    } else {
        element = getElementFromTemplate(params as IGetElementTemplate);
    }

    loadStylesheets && element && await loadContainerStylesheets({
        element,
        name
    });

    resolve(element);
}