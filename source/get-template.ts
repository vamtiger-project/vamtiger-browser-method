import {
    IGetTemplate,
    GetTemplate,
    StringConstant,
    AttributesKey
} from './types';
import html from './html';
import isWindow from './is-window';

let template: HTMLTemplateElement;
let templateHtml: string;

const { nothing } = StringConstant;

if (isWindow()) {
    template = document.createElement('template');

    templateHtml = [
        html
    ].join(nothing);

    template.innerHTML = templateHtml;
}

export default <P extends IGetTemplate>(params: P) => {
    const {
        selector,
        attributes = {},
        properties = {}
    } = params;
    const attributesKeys = Object.keys(attributes) as AttributesKey[]
    const templateElement = template.content.querySelector(selector);
    const currentTemplate = templateElement && templateElement.cloneNode(true) as GetTemplate<P>;

    if (currentTemplate) {
        Object.assign(currentTemplate, properties);

        attributesKeys.forEach(key => attributes[key] && currentTemplate.setAttribute(key, attributes[key] || ''));
    }

    return currentTemplate;
};