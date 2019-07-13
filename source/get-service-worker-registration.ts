import {
    LocalHostRelativePath,
    StringConstant
} from './types';
import { serviceWorker as config } from './config';
import isWindow from './is-window';
import getPageRelativeUrl from './get-page-relative-url';

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
    const pageUrl = getPageRelativeUrl();
    const secondaryUrl = [
        pageUrl === slash ? '' : pageUrl,
        vamtigerBrowserMethod
    ].join(slash);
    console.log(url);
    console.log(secondaryUrl);
    const sharedWorkerRegistration = serviceWorker && await serviceWorker
        .register(url, config)
        .catch(handleError);
    const secondarySharedWorkerRegistration = !sharedWorkerRegistration && secondaryUrl !== url && serviceWorker && await serviceWorker
        .register(secondaryUrl, config)
        .catch(handleError);
    const registration = sharedWorkerRegistration || secondarySharedWorkerRegistration;

    return registration;
}

function handleError(error: Error) {
    console.warn(error.message);
}