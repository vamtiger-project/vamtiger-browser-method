import {
    IGetElementUrl,
    TagName,
    ErrorMessage
} from './types';
import loadContainerStylesheets from './load-container-stylesheets';

const {
    noElementName,
    noElementSelector,
    noTemplateUrl,
    noTemplateForUrl,
    noElementForSelector
} = ErrorMessage;

export default async function (params: IGetElementUrl) {
    const { name, url, selector, loadStylesheets } = params;
    const { head } = document;
    const template = name && selector && url && await fetch(url)
        .then(response => response.text());
    const container = template && document.createElement(TagName.template);

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

        element = container.content.querySelector<HTMLElement>(selector);

        loadStylesheets && element && await loadContainerStylesheets({
            ...params,
            container
        });
    }

    if (!element) {
        throw new Error(noElementForSelector);
    }

    element.setAttribute('dataset-name', name);

    return element;
}
