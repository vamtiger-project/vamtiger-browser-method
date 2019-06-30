import { IDefineCustomElement, ErrorMessage } from './types';

const { unsupportedFeature } = ErrorMessage;

export default function defineCustomElement({ name, constructor, ignore }: IDefineCustomElement) {
    const { customElements } = self;
    const define = customElements && customElements.define;
    const existingElement = define && customElements.get && customElements.get(name);

    if (define && !existingElement) {
        customElements.define(name, constructor);
    } else if (!ignore) {
        defineCustomElement({ name, constructor, ignore: true });
    } else {
        throw new Error(`${unsupportedFeature}: Custom Elements - ${name}`);
    }
}