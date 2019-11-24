import {
    LocalHostRelativePath,
    StringConstant,
    Selector
} from './types';
import { serviceWorker as config } from './config';
import isWindow from './is-window';
import getPageRelativeUrl from './get-page-relative-url';

const { slash, nothing } = StringConstant;
const { vamtigerBrowserMethod } = LocalHostRelativePath;
const { vamtigerBrowserMethodJs: selector } = Selector;

export default async function () {
    const sharedWorkerRegistration = isWindow()
        && canGetServiceWorker()
        && await getServiceWorker()
        || undefined;

    return sharedWorkerRegistration;
}

function canGetServiceWorker() {
    const { location } = self;
    const { origin } = location;
    const { head } = document;
    const vamtigerBrowserMethodJs = head.querySelector<HTMLScriptElement>(selector);
    const vamtigerBrowserMethodJsOrigin = vamtigerBrowserMethodJs && vamtigerBrowserMethodJs.src && new URL(vamtigerBrowserMethodJs.src).origin;
    const result = origin === vamtigerBrowserMethodJsOrigin;

    return result
}

async function getServiceWorker() {
    const { serviceWorker } = navigator;
    const { head } = document;
    const vamtigerBrowserMethodJs = head.querySelector<HTMLScriptElement>(selector);
    const url = vamtigerBrowserMethodJs && vamtigerBrowserMethodJs.src;
    const pageUrl = getPageRelativeUrl();
    const secondaryUrl = [
        pageUrl === slash ? '' : pageUrl,
        vamtigerBrowserMethod
    ].join(nothing);
    const secondaryConfig = {
        ...config,
        scope: pageUrl
    };
    const sharedWorkerRegistration = url && serviceWorker && await serviceWorker
        .register(url, config)
        .catch(handleError);
    const secondarySharedWorkerRegistration = !sharedWorkerRegistration && secondaryUrl !== url && serviceWorker && await serviceWorker
        .register(secondaryUrl, secondaryConfig)
        .catch(handleError);
    const registration = sharedWorkerRegistration || secondarySharedWorkerRegistration;

    return registration;
}

function handleError(error: Error) {
    console.warn(error.message);
}