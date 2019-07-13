import {
    ISupport,
    MessageAction
} from './types';
import getServiceWorkerClients from './get-service-worker-clients';
import isServiceWorker from './is-service-worker';
import sendMessage from './send-message';

export default function (event: Event) {
    isServiceWorker() && handleServiceWorkerActivation(event);
}

async function handleServiceWorkerActivation(event: Event) {
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
}