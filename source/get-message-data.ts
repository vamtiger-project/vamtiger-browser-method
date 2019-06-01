import {
    IMessageAction,
    MessageAction
} from './types';

const { parse } = JSON;
const ignoreMessage = {
    action: MessageAction.ignore,
    params: {}
}
const textDecoder = new TextDecoder();

export default function (event: MessageEvent) {
    let message: IMessageAction;

    try {
        message = getMessageData(event) || ignoreMessage;
    } catch(error) {
        message = ignoreMessage;
    }

    return message;
}

function getMessageData({ data: message }: MessageEvent) {
    const messageData: IMessageAction = typeof message === 'string' && parse(message)
        || message instanceof Uint8Array && parse(textDecoder.decode(message));

    if (typeof messageData.params === 'string') {
        messageData.params = parse(messageData.params);
    }

    return messageData;
}