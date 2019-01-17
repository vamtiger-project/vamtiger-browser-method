import { IDefineCustomElement, ErrorMessage, Selector } from './types';

const { unsupportedFeature, customElementAreadyDefined } = ErrorMessage;
const params = [] as IDefineCustomElement[];

let webComponentsReady: boolean = false;

document.addEventListener('WebComponentsReady', processParams);

export default function defineCustomElement({ name, constructor, ignore }: IDefineCustomElement) {
    const { customElements, WebComponents } = window;
    const define = customElements && customElements.define;
    const existingElement = define && customElements.get && customElements.get(name);
    const webcomponentsjs = document.querySelector(Selector.webcomponentsjs);

    if (define && !existingElement) {
        customElements.define(name, constructor);
    } else if (!webComponentsReady && WebComponents) {
        WebComponents.waitFor && WebComponents.waitFor(defineCustomElement);
    } else if (webcomponentsjs) {
        !ignore && params.push({ name, constructor });
    } else if (existingElement) {
        throw new Error(`${customElementAreadyDefined}: ${name}`);
    } else {
        throw new Error(`${unsupportedFeature}: Custom Elements - ${name}`);
    }
}

function processParams(event: Event) {
    webComponentsReady = true;

    document.removeEventListener('WebComponentsReady', processParams);

    params.forEach(currentParams => defineCustomElement(Object.assign(currentParams, { ignore: true})));

    params.forEach(params.pop);
}