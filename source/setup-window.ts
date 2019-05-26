import {
    Environment
} from './types';
import getWorker from './get-worker';
import isWindow from './is-window';

export default function () {
    isWindow() && setupWindow();
}

function setupWindow() {
    const { VamtigerBrowserMethod } = self;

    VamtigerBrowserMethod.worker = getWorker();
}