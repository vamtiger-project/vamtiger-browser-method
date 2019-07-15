import {
    IRemoveDepencyUrl,
    Selector
} from './types';
import isWindow from './is-window';

const { requestIdleCallback } = self;

export default function (params: IRemoveDepencyUrl) {
    if (isWindow()) {
        if (requestIdleCallback) {
            requestIdleCallback(() => removeDependencyUrlWindow(params));
        } else {
            setTimeout(() => removeDependencyUrlWindow(params), 0);
        }
    }
}

function removeDependencyUrlWindow({url}: IRemoveDepencyUrl) {
    const {'vamtiger-browser-method': metaElement } = self;
    const dependencyUrlMetaElement = metaElement.querySelector<HTMLMetaElement>(Selector.dependencyUrlMetaElement);
    const selector = `meta[data-url="${url}"]`;
    const urlMetaElement = dependencyUrlMetaElement && dependencyUrlMetaElement.querySelector<HTMLMetaElement>(selector);

    if (urlMetaElement && dependencyUrlMetaElement) {
        dependencyUrlMetaElement.removeChild(urlMetaElement);
    }
}