import {
    ILoadMethod,
    ILoadMethodWindow,
    MessageAction,
    ErrorMessage,
    ScriptType,
    StringConstant
} from './types';
import loadScript from './load-script';
import isWindow from './is-window';
import isWorker from './is-worker';
import sendMessage from './send-message';
import queue from './queue';
import getCache from './get-cache';

const { requestIdleCallback } = self;
const { nothing, slash } = StringConstant;
const blobParams = {
    type: ScriptType.js
}

export default async function (params: ILoadMethod) {return new Promise((resolve, reject) => {
    if (isWindow()) {
        if (requestIdleCallback) {
            requestIdleCallback(() => loadMethodWindow({...params, resolve, reject}))
        } else {
            setTimeout(() => loadMethodWindow({...params, resolve, reject}), 0);
        }
    } else if (isWorker()) {
        loadMethodWorker(params)
            .then(resolve)
            .catch(reject);
    }
})}

async function loadMethodWindow({relativeUrl, name, resolve, reject}: ILoadMethodWindow) {
    let scriptLoadError: Error | undefined = undefined;

    const { origin } = location;
    const src = [
        origin,
        relativeUrl
    ].join(slash);
    const { VamtigerBrowserMethod, _ } = self;
    const { worker, workerSupport } = VamtigerBrowserMethod;
    const { get } = _;
    const script = await loadScript({src}).catch(error => scriptLoadError = error);
    const method: Function | undefined = get(VamtigerBrowserMethod.method, name);
    const message = workerSupport && workerSupport.cache && worker && typeof method === 'function' && {
        action: MessageAction.loadMethod,
        params: {relativeUrl: src, name}
    };
    const queueParams = message && {
        key: src,
        resolve,
        reject
    };

    if (script) {
        script.dataset.vamtigerBrowserMethodLoadedMethod = name;
    }

    if (scriptLoadError) {
        reject(scriptLoadError);
    } else if (!method) {
        reject(new Error(`${ErrorMessage.scriptLoadedButMethodNameNotFound} - ${name}`));
    } else if (queueParams && message) {
        queue(queueParams);

        sendMessage(message);
    } else {
        resolve();
    }
}

async function loadMethodWorker({relativeUrl: url, name}: ILoadMethod) {
    const { importScripts } = self;
    const importMethod = url && importScripts && importScripts(url);
    const message = {
        action: MessageAction.dequeue,
        params: {
            key: url,
            data: {}
        }
    };
    const updateMethodMessage = method.hasOwnProperty(name) && {
        action: MessageAction.updateMethod,
        params: {name}
    };

    updateMethodMessage && sendMessage(updateMethodMessage);

    return message;
}
