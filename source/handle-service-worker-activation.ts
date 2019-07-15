import {
    ISupport,
    MessageAction
} from './types';
import {
    workerDependencies
} from './config';
import isServiceWorker from './is-service-worker';
import sendMessage from './send-message';

export default function (event: Event) {
    isServiceWorker() && handleServiceWorkerActivation(event);
}

async function handleServiceWorkerActivation(event: Event) {
    const { importScripts } = self;
    const { VamtigerBrowserMethod } = self;
    const { support, environment } = VamtigerBrowserMethod;
    const { indexedDbIsAccessible } = (support || {}) as ISupport;
    const params = indexedDbIsAccessible && support && {
        environment,
        ...support
    } || {};
    const message = {
        action: MessageAction.saveSupport,
        params
    };

    sendMessage(message);

    importScripts && workerDependencies.forEach(dependency => importScripts(dependency));
}