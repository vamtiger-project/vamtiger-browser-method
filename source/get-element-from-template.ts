import {
    IGetElementTemplate,
    TagName,
    ErrorMessage
} from './types';
import loadContainerStylesheets from './load-container-stylesheets';

const {
    noElementName,
    noTemplate,
    noElementForSelector
} = ErrorMessage;

export default async function (params: IGetElementTemplate) {
    const { name, template, loadStylesheets } = params;
    const container = name && template && document.createElement(TagName.template);

    let element: HTMLElement | null = null;

    if (!name) {
        throw new Error(noElementName);
    } else if (!template) {
        throw new Error(noTemplate);
    }

    if (container) {
        container.innerHTML = template;

        element = container.content.firstElementChild as HTMLElement;

        loadStylesheets && element && await loadContainerStylesheets({
            ...params,
            container
        });
    }

    if (!element) {
        throw new Error(noElementForSelector);
    }

    element.dataset.name = name;

    return element;
}