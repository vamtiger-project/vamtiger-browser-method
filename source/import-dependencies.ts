import {
    IImportDependencies,
    Selector,
    MessageAction,
    WorkerType
} from './types';
import isWindow from './is-window';
import isWorker from './is-worker';
import isServiceWorker from './is-service-worker';
import sendMessge from './send-message';

const { requestIdleCallback } = self;

export default function (params: IImportDependencies) {
    if (isWindow() && requestIdleCallback) {
        if (requestIdleCallback) {
            requestIdleCallback(importDependenciesWindow);
        } else {
            setTimeout(importDependenciesWindow, 0);
        }
    } else if (isWorker()) {
        importDependenciesWorker(params);
    }
}

function importDependenciesWindow() {
    const {'vamtiger-browser-method': metaElement } = self;
    const dependencyUrlMetaElement = metaElement.querySelector<HTMLMetaElement>(Selector.dependencyUrlMetaElement);
    const urlMetaElements = dependencyUrlMetaElement && Array.from(dependencyUrlMetaElement.querySelectorAll<HTMLMetaElement>(Selector.urlMetaElement)) || [];
    const urls = urlMetaElements
        .map(({dataset}) => dataset.url || '')
        .filter(url => url);
    const message = {
        action: MessageAction.importDependencies,
        params: {urls},
        workerType: WorkerType.all
    };

    sendMessge(message);
}

function importDependenciesWorker({urls = []}: IImportDependencies) {
    const { importScripts } = self;
    const action = MessageAction.removeDependencyUrl;

    importScripts && urls.forEach(url => {
        importScripts(url);

        sendMessge({action, params: {url}});
    });
}