import { IDefineCustomElement, ErrorMessage } from './types';

const { unsupportedFeature, customElementAreadyDefined } = ErrorMessage;

export default function defineCustomElement({ name, constructor, ignore }: IDefineCustomElement) {
    const { customElements } = window;
    const define = customElements && customElements.define;
    const existingElement = define && customElements.get && customElements.get(name);

    if (define && !existingElement) {
        customElements.define(name, constructor);
    } else if (existingElement) {
        throw new Error(`${customElementAreadyDefined}: ${name}`);
    } else if (!ignore) {
        setTimeout(() => defineCustomElement({ name, constructor, ignore: true }), 4000);
    } else {
        throw new Error(`${unsupportedFeature}: Custom Elements - ${name}`);
    }
}