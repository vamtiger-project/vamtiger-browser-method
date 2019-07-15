import {
    ISetDependencyUrl,
    ISetDependencyUrlWindow,
    Selector,
    ScriptType
} from './types';
import isWindow from './is-window';

const { requestIdleCallback } = self;
const params = {
    type: ScriptType.js
}

export default function ({script}: ISetDependencyUrl) {
    const { innerHTML: js } = script;

    if (js && isWindow()) {
        if (requestIdleCallback) {
            requestIdleCallback(() => setDependencyUrlWindow({js}));
        } else {
            setTimeout(() => setDependencyUrlWindow({js}), 0);
        }
    }
}

function setDependencyUrlWindow({js}: ISetDependencyUrlWindow) {
    const {'vamtiger-browser-method': metaElement } = self;
    const { createObjectURL } = URL;
    const dependencyUrlMetaElement = metaElement.querySelector<HTMLMetaElement>(Selector.dependencyUrlMetaElement);
    const blob = new Blob([js], params);
    const url = createObjectURL(blob);
    const selector = `meta[data-url="${url}"]`;
    const existingUrlMetaElement = dependencyUrlMetaElement && dependencyUrlMetaElement.querySelector<HTMLMetaElement>(selector);
    const urlMetaElement = !existingUrlMetaElement && document.createElement('meta');

    if (urlMetaElement && dependencyUrlMetaElement) {
        urlMetaElement.dataset.url = url;

        dependencyUrlMetaElement.appendChild(urlMetaElement);
    }
}