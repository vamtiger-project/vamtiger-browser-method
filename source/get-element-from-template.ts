import {
    IGetElementTemplate,
    TagName,
    ErrorMessage
} from './types';

const { div } = TagName;
const {
    noElementName,
    noTemplate,
    noElementForSelector
} = ErrorMessage;

export default function ({ name, template }: IGetElementTemplate) {
    const container = name && template && document.createElement(div);

    let element: HTMLElement | null = null;

    if (!name) {
        throw new Error(noElementName);
    } else if (!template) {
        throw new Error(noTemplate);
    }

    if (container) {
        container.innerHTML = template;

        element = container.firstElementChild as HTMLElement;
    }

    if (!element) {
        throw new Error(noElementForSelector);
    }

    element.dataset.name = name;

    return element;
}