import {
    ILoadMethod,
    ILoadMethodWindow,
    MessageAction,
    StringConstant,
    regex
} from './types';
import loadScript from './load-script';
import isWindow from './is-window';
import isWorker from './is-worker';
import sendMessage from './send-message';
import queue from './queue';
import getParentUrl from './get-parent-url';

const { requestIdleCallback } = self;

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

async function loadMethodWindow({url: currentUrl, name, resolve, reject}: ILoadMethodWindow) {
    let scriptLoadError: Error | undefined = undefined;

    const { VamtigerBrowserMethod, _ } = self;
    const { worker, workerSupport, messageQueue, origin } = VamtigerBrowserMethod;
    const { get } = _;
    const parentUrl = getParentUrl();
    const url = currentUrl.match(regex.remoteUrl) && currentUrl
        ||
        [parentUrl, currentUrl].join(StringConstant.slash);
    const { origin: urlOrigin } = new URL(url);
    const src = urlOrigin === origin && url;
    const script = src && await loadScript({src})
        .catch(error => scriptLoadError = error);
    const method: Function = script && get(VamtigerBrowserMethod.method, name);
    const message = src && workerSupport && workerSupport.cache && worker && typeof method === 'function' && {
        action: MessageAction.loadMethod,
        params: {relativeUrl: src, name}
    };
    const queueParams = src && message && {
        key: src,
        queue: messageQueue,
        resolve,
        reject
    };

    if (script) {
        script.dataset.vamtigerBrowserMethodLoadedMethod = name;
    }

    if (scriptLoadError) {
        reject(scriptLoadError);
    } else if (queueParams && message) {
        queue(queueParams);

        sendMessage(message);
    } else {
        resolve();
    }
}

async function loadMethodWorker({url, name}: ILoadMethod) {
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
