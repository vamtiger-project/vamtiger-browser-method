import {
    IAnyObject,
    IMessageAction,
    MessageAction
} from './types';
const { parse } = JSON;

export default function (event: MessageEvent): IMessageAction {
    try {
        const { data: message } = event;
        const messageData: IAnyObject = typeof message === 'string' && parse(message) || message;

        if (typeof messageData.data === 'string') {
            messageData.data = parse(messageData.data);
        }

        return messageData.data;
    } catch(error) {
        return {
            action: MessageAction.ignore,
            data: {}
        };
    }
}