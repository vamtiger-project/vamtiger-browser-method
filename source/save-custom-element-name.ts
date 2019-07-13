import {
    ISaveCustomeElementName,
    DbKeyPath,
    DbStoreName,
    MessageAction,
    Selector
} from './types';
import isWindow from './is-window';
import isWorker from './is-worker';
import sendMessage from './send-message';
import save from './save-indexed-db-data';
import getTextModeCss from './get-text-mode-css';

const { customElementName: keyPath } = DbKeyPath;
const { customElementName: storeName } = DbStoreName;

export default function (params: ISaveCustomeElementName) {
    isWindow() && saveCustomElementNameWindow(params);

    isWorker() && saveCustomElementNameWorker(params)
}

function saveCustomElementNameWindow(params: ISaveCustomeElementName) {
    const { VamtigerBrowserMethod } = self;
    const { support, workerSupport } = VamtigerBrowserMethod;
    const message = workerSupport && workerSupport.indexedDbIsAccessible && {
        action: MessageAction.saveCustomElementName,
        params
    };

    if (message) {
        sendMessage(message);
    } else if (support && support.indexedDbIsAccessible) {
        saveCustomElementNameWindowIndexDb(params);
    } else {
        saveCustomeElementNameDocument(params);
    }
}

function saveCustomElementNameWorker(params: ISaveCustomeElementName) {
    saveCustomElementNameIndexDb(params);
}

function saveCustomElementNameIndexDb(params: ISaveCustomeElementName) {
    const { name } = params;
    const saveParams = name && {
        storeName,
        keyPath,
        data: {
            name,
            ...params
        },
        successAction: MessageAction.getTextModeCss
    };

    saveParams && save(saveParams);
}

async function saveCustomElementNameWindowIndexDb(params: ISaveCustomeElementName) {
    const { name } = params;
    const saveParams = name && {
        storeName,
        keyPath,
        data: {
            name,
            ...params
        }
    };

    saveParams && await save(saveParams);

    getTextModeCss();
}

function saveCustomeElementNameDocument({name}: ISaveCustomeElementName) {
    const { VamtigerBrowserMethod } = self;
    const { metaElement } = VamtigerBrowserMethod;
    const customElementMetaElement = metaElement && metaElement.querySelector<HTMLMetaElement>(Selector.customElementNameMetaElement);
    const selector = customElementMetaElement && `meta[data-name="${name}"]`;
    const existingMetaElement = selector && customElementMetaElement && customElementMetaElement.querySelector<HTMLMetaElement>(selector);
    const newMetaElement = !existingMetaElement && document.createElement('meta');

    if (customElementMetaElement && newMetaElement) {
        newMetaElement.dataset.name = name;

        customElementMetaElement.appendChild(newMetaElement);

        getTextModeCss();
    }
}