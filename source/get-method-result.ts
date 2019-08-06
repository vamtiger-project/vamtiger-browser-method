import {
    IGetMethodResult,
    IGetMethodResultWindow,
    MessageAction
} from './types';
import isWindow from './is-window';
import isWorker from './is-worker';
import queue from './queue';
import sendMessage from './send-message';
import getMessageId from './get-message-id';

const { requestIdleCallback } = self;

export default function (params: IGetMethodResult) {return new Promise((resolve, reject) => {
    if (isWindow()) {
        if (requestIdleCallback) {
            requestIdleCallback(() => getMethodResultWindow({...params, resolve, reject}));
        } else {
            setTimeout(() => getMethodResultWindow({...params, resolve, reject}), 0);
        }
    } else if (isWorker()) {
        getMethodResultWorker(params)
            .then(resolve)
            .then(reject);
    }
})}

async function getMethodResultWindow({messageId = getMessageId(), name, params, resolve, reject}: IGetMethodResultWindow) {
    const { messageQueue } = VamtigerBrowserMethod;
    const queueParams = {
        key: messageId,
        queue: messageQueue,
        resolve,
        reject
    };
    const message = {
        action: MessageAction.getMethodResult,
        params: {
            name,
            params,
            messageId
        }
    };

    queue(queueParams);

    sendMessage(message);
}

async function getMethodResultWorker({messageId: key = '', name, params}: IGetMethodResult) {
    const { VamtigerBrowserMethod } = self;
    const { method } = VamtigerBrowserMethod;
    const namedMethod = method[name];
    const result = namedMethod ? await namedMethod(params) : `No method named '${name}'`;
    const message = {
        action: MessageAction.dequeue,
        params: {
            key,
            data: result
        }
    };

    return message;
}