import getWorker from './get-worker';
import isWindow from './is-window';

export default function () {
    isWindow() && setupWindow();
}

async function setupWindow() {
    const { VamtigerBrowserMethod } = self;

    VamtigerBrowserMethod.worker = await getWorker();
}