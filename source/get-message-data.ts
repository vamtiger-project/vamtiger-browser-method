import {
    IAnyObject,
    IMessageAction,
    MessageAction
} from './types';
const { parse } = JSON;

export default function (event: MessageEvent): IMessageAction {
    try {
        const { data: message } = event;
        const messageData: IMessageAction = typeof message === 'string' && parse(message) || message;

        if (typeof messageData.params === 'string') {
            messageData.params = parse(messageData.params);
        }

        return messageData;
    } catch(error) {
        return {
            action: MessageAction.ignore,
            params: {}
        };
    }
}