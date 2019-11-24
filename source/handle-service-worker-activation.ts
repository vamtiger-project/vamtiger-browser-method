import {
    ISupport,
    MessageAction
} from './types';
import {
    workerDependencies
} from './config';
import sendMessage from './send-message';

export default async function handleServiceWorkerActivation(event: Event) {
    const { VamtigerBrowserMethod } = self;
    const { support } = VamtigerBrowserMethod;
    const { indexedDbIsAccessible } = (support || {}) as ISupport;
    const params = indexedDbIsAccessible && support
        || {};
    const message = Object.keys(params).length && {
        action: MessageAction.saveSupport,
        params
    };

    message && sendMessage(message);
}