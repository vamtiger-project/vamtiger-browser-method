import {
    MessageAction,
    ignore,
    MessageResponse,
    sendMessageFromWorker
} from './types';
import getMessageData from './get-message-data';
import removeRedundantScripts from './remove-redundant-scripts';
import isWindow from './is-window';
import isWorker from './is-worker';

const action = {
    [MessageAction.ignore]: ignore,
    [MessageAction.removeRedundantScripts]: removeRedundantScripts
}

export default async function (event: MessageEvent) {
    const { VamtigerBrowserMethod } = self;
    const { worker } = VamtigerBrowserMethod;
    const { action: actionName, data: params } = getMessageData(event);
    const currentAction = action[actionName] || ignore;
    const response = currentAction(params) as MessageResponse;

    if (response) {
        isWorker && sendMessageFromWorker(response);

        isWindow && worker && worker.postMessage(response);
    }
}