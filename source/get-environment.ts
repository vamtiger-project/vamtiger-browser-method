import {
    Environment
} from './types';
import isWindow from './is-window';
import isWorker from './is-worker';
import isServiceWorker from './is-service-worker';

export default function () {
    const environment = isWorker() && Environment.worker
        || isServiceWorker() && Environment.serviceWorker
        || isWindow() && Environment.window
        || Environment.unknown;

    return environment;
}