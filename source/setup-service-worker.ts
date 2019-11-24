import {
    FetchEvent
} from './types';
import isServiceWorker from './is-service-worker';
import handleFetchRequest from './handle-fetch-request';
import handleServiceWorkerActivation from './handle-service-worker-activation';
import handeMessage from './handle-message';

export default async function () {
    isServiceWorker() && setupServiceWorker();
}

async function setupServiceWorker() {
    addEventListener('install', handleServiceWorkerActivation);

    addEventListener('activate', handleServiceWorkerActivation);

    addEventListener('message', handeMessage);

    addEventListener('fetch', event => handleFetchRequest(event as FetchEvent));
}