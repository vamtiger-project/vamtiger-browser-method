import {
    IMessageAction,
    ISupport,
    sendMessageFromWorker,
    WorkerType
} from './types';
import isWindow from './is-window';
import isWorker from './is-worker';
import isServiceWorker from './is-service-worker';
import sendMessageFromServiceWorker from './send-message-from-service-worker';

const { stringify } = JSON;
const textEncoder = new TextEncoder();

export default function (params: IMessageAction) {
    const { serviceWorker } = navigator;
    const { workerType = WorkerType.worker } = params;
    const { VamtigerBrowserMethod } = self;
    const { worker, support } = VamtigerBrowserMethod;
    const { textEncoder: textEncoderSupport } = support || {} as ISupport;
    const stringMessage = stringify(params);
    const message = textEncoderSupport && textEncoder.encode(stringMessage)
        || stringMessage;

    if (isWindow()) {
        if(workerType === WorkerType.all) {
            worker && worker.postMessage(message);
            serviceWorker && serviceWorker.controller && serviceWorker.controller.postMessage(message);
        } else if (workerType === WorkerType.worker) {
            worker && worker.postMessage(message);
        } else if (workerType === WorkerType.serviceWorker) {
            serviceWorker && serviceWorker.controller && serviceWorker.controller.postMessage(message);
        }
    } else if (isWorker()) {
        sendMessageFromWorker && sendMessageFromWorker(message);
    } else if (isServiceWorker()) {
        sendMessageFromServiceWorker({message});
    }
}