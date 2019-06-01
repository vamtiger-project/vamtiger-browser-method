import {
    IMessageAction,
    ISupport,
    sendMessageFromWorker
} from './types';
import isWindow from './is-window';
import isWorker from './is-worker';

const { stringify } = JSON;
const textEncoder = new TextEncoder();

export default function (params: IMessageAction) {
    const { VamtigerBrowserMethod } = self;
    const { worker, support } = VamtigerBrowserMethod;
    const { textEncoder: textEncoderSupport } = support || {} as ISupport;
    const stringMessage = stringify(params);
    const message = textEncoderSupport && textEncoder.encode(stringMessage)
        || stringMessage;

    isWindow() && worker && worker.postMessage(message);

    isWorker() && sendMessageFromWorker(message)
}