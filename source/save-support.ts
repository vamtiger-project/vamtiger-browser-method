import {
    ISaveSupport,
    MessageAction,
    DbStoreName,
    DbKeyPath
} from './types';
import save from './save-indexed-db-data';
import isWindow from './is-window';
import isWorker from './is-worker';
import sendMessage from './send-message';

const { support: storeName } = DbStoreName;

export default async function (params: ISaveSupport) {
    isWindow() && saveSupportDataWindow(params);

    isWorker() && saveSupportDataWorker(params);
}

function saveSupportDataWindow(params: ISaveSupport) {
    const { VamtigerBrowserMethod } = self;
    const { workerSupport } = VamtigerBrowserMethod;
    const message = workerSupport && workerSupport.indexedDbIsAccessible && {
        action: MessageAction.saveSupport,
        params
    };

    if (message) {
        sendMessage(message);
    } else {
        saveSupportDataIndexDb(params);
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