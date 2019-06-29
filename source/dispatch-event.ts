import {
    IDispatchEvent,
    EventName,
    Origin
} from './types';
import isWindow from './is-window';

const eventParams = {
    bubbles: true
};

export default function (params: IDispatchEvent) {
    isWindow() && postWindowMessage(params);
}

function postWindowMessage({eventName, detail = {}}: IDispatchEvent) {
    const event = new CustomEvent(eventName, {
        ...eventParams,
        detail
    });

    self.dispatchEvent(event);
}