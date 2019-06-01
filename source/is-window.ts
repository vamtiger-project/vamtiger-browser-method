import {
    Environment
} from './types';

export default function () {
    const { VamtigerBrowserMethod } = self;
    const { environment } = VamtigerBrowserMethod;
    const isWindow = environment === Environment.window;

    return isWindow;
}