import {
    IAnyObject,
    IGetServiceWorkerClients
} from './types';
import {
    serviceWorkerClients as baseConfig
} from './config';
import isServiceWorker from './is-service-worker';

declare const self: IAnyObject;

export default async function (params: IGetServiceWorkerClients) {
    const clients: IAnyObject[] = isServiceWorker() && await getClients(params) || [];

    return clients;
}

function getClients({type}: IGetServiceWorkerClients) {
    const config = {
        ...baseConfig,
        type
    };
    const clients = self && self.clients && self.clients.matchAll && self.clients.matchAll(config);

    return clients;
}