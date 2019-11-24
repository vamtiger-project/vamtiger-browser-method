import handleMessage from './handle-message';
import getWorkerUrl from './get-worker-url';

const { stringify } = JSON;

let worker: Worker;

export default async function () {
    const workerUrl = getWorkerUrl();
    const currentWorker = workerUrl && new Worker(workerUrl);

    if (currentWorker) {
        currentWorker.addEventListener('message', handleMessage);
        currentWorker.addEventListener('error', handleError);
    }

    worker = worker || currentWorker;

    return worker;
}

export function handleError(event: ErrorEvent) {
    const keys = Object.keys(event) as (keyof ErrorEvent)[];

    keys.forEach(key => console.error(typeof event[key] === 'string' || stringify(event[key])));
}