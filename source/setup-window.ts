import getWorker from './get-worker';
import isWindow from './is-window';
import loadDependencies from './load-dependencies';

export default function () {
    isWindow() && setupWindow();
}

async function setupWindow() {
    const { VamtigerBrowserMethod } = self;

    await loadDependencies();

    VamtigerBrowserMethod.worker = await getWorker();
}