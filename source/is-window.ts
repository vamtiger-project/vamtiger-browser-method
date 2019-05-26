import {
    Environment
} from './types';

export default function () {
    const { VamtigerBrowserMethod } = self;
    const { envrironment } = VamtigerBrowserMethod;
    const isWindow = envrironment === Environment.window;

    return isWindow;
}