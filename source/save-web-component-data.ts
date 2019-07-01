import {
    ISaveWebComponentData,
    ISaveWebComponentDataWorker,
    MessageAction,
    DbStoreName,
    DbKeyPath
} from './types';
import isWindow from './is-window';
import isWorker from './is-worker';
import save from './save-indexed-db-data';
import sendMessage from './send-message';
import getWebComponentData from './get-web-component-data';
import removeRedundantScripts from './remove-redundant-scripts';

const { webComponent: storeName } = DbStoreName;
const { webComponent: keyPath } = DbKeyPath;

export default function (params: ISaveWebComponentData) {
    if (isWindow()) {
        return saveWebComponentDataWindow(params);
    } else if (isWorker()) {
        return saveWebComponentDataWorker(params);
    }
}

async function saveWebComponentDataWindow(params: ISaveWebComponentData) {
    const { VamtigerBrowserMethod } = self;
    const { support, workerSupport } = VamtigerBrowserMethod;
    const { url: key } = params;
    const selector = getSelector({ url: key });
    const data = getData(params);
    const message = data && {
        action: MessageAction.saveWebComponentData,
        params: data
    };

    if (workerSupport && workerSupport.indexedDbIsAccessible) {
        message && sendMessage(message);
    } else if (support && support.indexedDbIsAccessible) {
        await saveWebComponentDataIndexDb(params);
        await getWebComponentData({ key });
        await removeRedundantScripts({ selector });
    }
}

async function saveWebComponentDataWorker(params: ISaveWebComponentDataWorker) {
    const { url } = params;
    const selector = getSelector({ url });
    const saveData = await saveWebComponentDataIndexDb(params);
    const getWebComponentDataMessage = {
        action: MessageAction.getWebComponentData,
        params: {
            key: url
        }
    };
    const removeRedundantScriptsMessage = {
        action: MessageAction.removeRedundantScripts,
        params: {
            selector
        }
    };

    sendMessage(getWebComponentDataMessage);
    sendMessage(removeRedundantScriptsMessage);
}

async function saveWebComponentDataIndexDb(params: ISaveWebComponentData) {
    const data = getData(params);
    const saveParams = data && {
        storeName,
        keyPath,
        data,
        successAction: MessageAction.getWebComponentData
    };

    saveParams && await save(saveParams);
}

function getData({ url, created = new Date().getTime(), json, jsonLd }: ISaveWebComponentData) {
    const data = url && jsonLd && {
        url,
        created,
        jsonLd: jsonLd,
        json: json
    };

    return data;
}

function getSelector({ url }: Pick<ISaveWebComponentData, 'url'>) {
    const selector = `script[type="application/json"][data-json-ld="${url}"]`;

    return selector;
}