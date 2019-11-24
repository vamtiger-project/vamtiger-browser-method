import {
    ISaveSupport,
    MessageAction,
    DbStoreName,
    DbKeyPath,
    Environment
} from './types';
import save from './save-indexed-db-data';
import isWindow from './is-window';
import isWorker from './is-worker';
import isServiceWorker from './is-service-worker';
import sendMessage from './send-message';

const { support: storeName } = DbStoreName;

export default async function (params: ISaveSupport) {
    isWindow() && saveSupportDataWindow(params);

    (isWorker() || isServiceWorker()) && saveSupportDataWorker(params);
}

function saveSupportDataWindow(support: ISaveSupport) {
    const { VamtigerBrowserMethod } = self;
    const { environment, workerSupport } = VamtigerBrowserMethod;
    const message = workerSupport && workerSupport.indexedDbIsAccessible && {
        action: MessageAction.saveSupport,
        params: support
    };

    if (environment === Environment.serviceWorker) {
        VamtigerBrowserMethod.serviceWorkerSupport = support;
    } else if (environment === Environment.worker) {
        VamtigerBrowserMethod.workerSupport = support;
    }

    if (message) {
        sendMessage(message);
    } else {
        saveSupportDataIndexDb(support);
    }
}

function saveSupportDataWorker(params: ISaveSupport) {
    saveSupportDataIndexDb(params);
}

function saveSupportDataIndexDb(params: ISaveSupport) {
    const { environment } = params;
    const saveParams = environment && {
        storeName,
        keyPath: DbKeyPath.support,
        data: {
            environment,
            ...params
        }
    };

    saveParams && save(saveParams);
}