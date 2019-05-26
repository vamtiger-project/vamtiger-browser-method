import {
    MessageAction,
    sendMessageFromWorker
} from './types'
import handleMessage from './handle-message';
import isWorker from './is-worker';

export default function () {
    isWorker() && setupWorker();
}

function setupWorker() {
    const data = {
        action: MessageAction.removeRedundantScripts
    };
    const message = { data };

    addEventListener('message', handleMessage);

    sendMessageFromWorker(message);
}