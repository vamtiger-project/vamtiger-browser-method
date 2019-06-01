import {
    MessageAction,
    MessageResponse
} from './types';
import getMessageData from './get-message-data';
import removeRedundantScripts from './remove-redundant-scripts';
import { setWorkerSupport } from './set-support';
import saveWebComponentData from './save-web-component-data';
import sendMessage from './send-message';
import ignoreMessage from './ignore-message';
import getWebComponentData from './get-web-component-data';
import dequeue from './dequeue';
import loadWebComponentData from './load-web-component-data';
import saveSupport from './save-support';

const action = {
    [MessageAction.ignore]: ignoreMessage,
    [MessageAction.removeRedundantScripts]: removeRedundantScripts,
    [MessageAction.setWorkerSupport]: setWorkerSupport,
    [MessageAction.saveWebComponentData]: saveWebComponentData,
    [MessageAction.getWebComponentData]: getWebComponentData,
    [MessageAction.dequeue]: dequeue,
    [MessageAction.loadWebComponentData]: loadWebComponentData,
    [MessageAction.saveSupport]: saveSupport
}

export default async function (event: MessageEvent) {
    const { action: actionName, params } = getMessageData(event) || { action: MessageAction.ignore, params: {}};
    const currentAction = action[actionName];
    const response = await currentAction(params) as MessageResponse;

    response && sendMessage(response);
}