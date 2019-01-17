import { IDefineCustomElement, ErrorMessage } from './types';

const { unsupportedFeature, customElementAreadyDefined } = ErrorMessage;

export default function defineCustomElement({ name, constructor }: IDefineCustomElement) {
    const { customElements } = window;
    const define = customElements && customElements.define
    const existingElement = define && customElements.get && customElements.get(name);

    if (define && !existingElement) {
        customElements.define(name, constructor);
    } else {
        setTimeout(() => {
            const { WebComponents } = window;
            if (WebComponents) {
                WebComponents.waitFor && WebComponents.waitFor(defineCustomElement);
            } else if (existingElement) {
                throw new Error(`${customElementAreadyDefined}: ${name}`);
            } else {
                throw new Error(`${unsupportedFeature}: Custom Elements - ${name}`);
            }
        }, 2000);
    }
}