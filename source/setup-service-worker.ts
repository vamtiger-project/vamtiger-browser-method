import {
    FetchEvent
} from './types';
import isServiceWorker from './is-service-worker';
import handleFetchRequest from './handle-fetch-request';
import handleServiceWorkerActivation from './handle-service-worker-activation';

export default function () {
    isServiceWorker() && setupServiceWorker();
}

async function setupServiceWorker() {
    addEventListener('install', handleServiceWorkerActivation);

    addEventListener('activate', handleServiceWorkerActivation);

    addEventListener('fetch', event => handleFetchRequest(event as FetchEvent));
}