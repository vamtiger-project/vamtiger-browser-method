import { IDefineCustomElement, ErrorMessage } from './types';

const { unsupportedFeature, customElementAreadyDefined } = ErrorMessage;

export default function defineCustomElement({ name, constructor }: IDefineCustomElement) {
    const { customElements, WebComponents } = window;
    const existingElement = customElements && customElements.define && customElements.get(name);

    if (!existingElement) {
        customElements.define(name, constructor);
    } else if (WebComponents) {
        WebComponents.waitFor && WebComponents.waitFor(defineCustomElement);
    } else if (existingElement) {
        throw new Error(`${customElementAreadyDefined}: ${name}`);
    } else {
        throw new Error(`${unsupportedFeature}: Custom Elements - ${name}`);
    }
}