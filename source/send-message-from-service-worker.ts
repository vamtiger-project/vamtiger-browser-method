import {
    ISendMessageFromServiceWorker
} from './types';
import getServiceWorkerClients from './get-service-worker-clients';

export default async function ({clients: type = 'window', message}: ISendMessageFromServiceWorker) {
    const clients = await getServiceWorkerClients({type});

    Promise.all(clients.map((client) => client.postMessage(message)));
}