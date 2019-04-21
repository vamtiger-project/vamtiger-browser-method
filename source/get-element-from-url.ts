import {
    IGetElementUrl,
    TagName,
    ErrorMessage
} from './vamtiger-browser-method';

export default async function ({ name, url, selector }: IGetElementUrl) {
    const { div } = TagName;
    const {
        noElementName,
        noElementSelector,
        noTemplateUrl,
        noTemplateForUrl,
        noElementForSelector
    } = ErrorMessage;
    const template = name && selector && url && await fetch(url)
        .then(response => response.text());
    const container = template && document.createElement(div);

    let element: HTMLElement | null = null;

    if (!name) {
        throw new Error(noElementName);
    } else if (!selector) {
        throw new Error(noElementSelector);
    } else if (!url) {
        throw new Error(noTemplateUrl);
    } else if (!template) {
        throw new Error(noTemplateForUrl);
    }

    if (container) {
        container.innerHTML = template;

        element = container.querySelector<HTMLElement>(selector);
    }

    if (!element) {
        throw new Error(noElementForSelector);
    }

    element.setAttribute('dataset-name', name);

    return element;
}
