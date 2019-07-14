import {
    Prefix
} from './types';
import isWindow from './is-window';
import isWorker from './is-worker';
import isServiceWorker from './is-service-worker';

export default function () {
    const prefix = isWindow() && Prefix.messageIdWindow
        || isWorker() && Prefix.messageIdWorker
        || isServiceWorker() && Prefix.messageIdServiceWorker
        || Prefix.messageIdUnknownEnvironment;
    const time = new Date().getTime();
    const messageId = prefix && `${prefix}-${time}`;

    return messageId;
}