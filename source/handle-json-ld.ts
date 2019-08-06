import {
    HandleJsonLdAction,
    JsonLdActionParams,
    JsonLdActionMethod,
    IHandleJsonLd
} from './types';
import dequeue from './dequeue';

const actionMethod = {
    [HandleJsonLdAction.dequeue]: dequeue
}

export default function (currentParams: IHandleJsonLd) {
    const { detail } = currentParams;
    const { action: actionName, params } = detail;
    const action = getAction(actionName);
    const actionParams = {
        ...params,
        ...getParams(actionName)
    };
    const result = action(actionParams);

    return result;
}

function getParams<A extends HandleJsonLdAction>(action: A) {
    const { VamtigerBrowserMethod } = self;
    const { queue } = VamtigerBrowserMethod;
    const params = {
        [HandleJsonLdAction.dequeue]: {queue}
    };
    const currentParams = params[action] as JsonLdActionParams<A>;

    return currentParams;
}

function getAction<A extends HandleJsonLdAction>(actionName: A) {
    const action = actionMethod[actionName] as JsonLdActionMethod<A>;

    return action;
}