import {
    IGetWebComponentData,
    MessageAction,
    DbKeyPath,
    DbStoreName
} from './types';
import isWindow from './is-window';
import isWorker from './is-worker';
import sendMessage from './send-message';
import getData from './get-indexed-db-data';
import dequeue from './dequeue';

const { getWebComponentData: action } = MessageAction;

export default function (params: IGetWebComponentData) {
    const { VamtigerBrowserMethod } = self;
    const { support, workerSupport } = VamtigerBrowserMethod;

    if (isWindow()) {
        if (workerSupport && workerSupport.indexedDbIsAccessible) {
            return getWebComponentDataWindowWorker(params);
        } else if (support && support.indexedDbIsAccessible) {
            getWebComponentDataWindow(params);
        }
    } else if (isWorker()) {
        return getWebComponentDataWorker(params);
    }
}

export async function getWebComponentDataWindow({ key }: IGetWebComponentData) {
    const data = await getWebComponentData({ key });
    const dequeueParams = data && {
        key,
        data
    };

    if (dequeueParams) {
        dequeue(dequeueParams);
    }
}

async function getWebComponentDataWindowWorker({ key }: IGetWebComponentData) {
    const message = {
        action,
        params: {
            key
        }
    };

    sendMessage(message);
}

export async function getWebComponentDataWorker({ key }: IGetWebComponentData) {
    const webComponent = await getWebComponentData({ key });
    const message = webComponent && webComponent.jsonLd.length && {
        action: MessageAction.dequeue,
        params: {
            key,
            data: {
                jsonLd: webComponent.jsonLd,
                json: webComponent.json
            }
        }
    };

    return message;
}

export async function getWebComponentData({ key }: IGetWebComponentData) {
    const webComponent = await getData({
        storeName: DbStoreName.webComponent,
        keyPath: DbKeyPath.webComponent,
        key
    });

    return webComponent;
}