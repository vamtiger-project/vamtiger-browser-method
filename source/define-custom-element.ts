import { IDefineCustomElement, ErrorMessage } from './vamtiger-browser-method';

export default function defineCustomElement({ name, constructor, ignore }: IDefineCustomElement) {
    const { unsupportedFeature, customElementAreadyDefined } = ErrorMessage;
    const { customElements } = window;
    const define = customElements && customElements.define;
    const existingElement = define && customElements.get && customElements.get(name);

    if (define && !existingElement) {
        customElements.define(name, constructor);
    } else if (existingElement) {
        throw new Error(`${customElementAreadyDefined}: ${name}`);
    } else if (!ignore) {
        defineCustomElement({ name, constructor, ignore: true });
    } else {
        throw new Error(`${unsupportedFeature}: Custom Elements - ${name}`);
    }
}