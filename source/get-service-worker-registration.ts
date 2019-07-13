import {
    LocalHostRelativePath,
    StringConstant
} from './types';
import { serviceWorker as config } from './config';
import isWindow from './is-window';

const { slash } = StringConstant;
const { vamtigerBrowserMethod } = LocalHostRelativePath;

export default async function () {
    const sharedWorkerRegistration = isWindow() && await getServiceWorker() || undefined;

    return sharedWorkerRegistration;
}

async function getServiceWorker() {
    const { serviceWorker } = navigator;
    const { origin } = location;
    const url = [
        origin,
        vamtigerBrowserMethod
    ].join(slash);
    const sharedWorkerRegistration = serviceWorker && serviceWorker
        .register(url, config)
        .catch(handleError);

    return sharedWorkerRegistration;
}

function handleError(error: Error) {
    console.warn(error.message);
}