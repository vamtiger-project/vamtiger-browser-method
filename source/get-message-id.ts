import {
    Prefix
} from './types';
import isWindow from './is-window';
import isWorker from './is-worker';

export default function () {
    const prefix = isWindow() && Prefix.messageIdWindow
        || isWorker() && Prefix.messageIdWorker;
    const time = new Date().getTime();
    const messageId = prefix && `${prefix}-${time}`;

    return messageId;
}