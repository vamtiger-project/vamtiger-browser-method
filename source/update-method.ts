import {
    IUpdateMthod,
    IAnyObject
} from './types';
import isWindow from './is-window';
import getMethodResult from './get-method-result';

const { requestIdleCallback } = self;

export default function (params: IUpdateMthod) {
    if (isWindow()) {
        if (requestIdleCallback) {
            requestIdleCallback(() => updateMethodWindow(params));
        } else {
            setTimeout(() => updateMethodWindow(params), 0)
        }
    }
}

async function updateMethodWindow({name}: IUpdateMthod) {
    const { VamtigerBrowserMethod } = self;
    const { method } = VamtigerBrowserMethod;
    const nameMethod = method[name];

    if (nameMethod) {
        method[name] = (params: IAnyObject) => getMethodResult({name, params});
    }
}