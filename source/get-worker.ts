import {
    selector,
    ScriptType,
    LocalHostRelativePath
} from './types';
import handleMessage from './handle-message';
import getLocalHostWorkerUrl from './get-local-host-worker-url';

const params = {
    type: ScriptType.js
}

let worker: Worker;

export default async function () {
    const localHostWorkerUrl = await getLocalHostWorkerUrl();
    const { head } = document;
    const { createObjectURL } = URL;
    const workerSelector = !worker && selector.worker;
    const workerScripts = (workerSelector && Array.from(head.querySelectorAll<HTMLScriptElement>(workerSelector)) || [])
        .map(({ innerHTML }) => innerHTML)
        .filter(script => script);
    const workerBlob = workerScripts && workerScripts.length && new Blob(workerScripts, params);
    const workerUrl = workerBlob && createObjectURL && createObjectURL(workerBlob);
    const currentWorker = workerUrl && new Worker(localHostWorkerUrl || workerUrl);

    if (currentWorker) {
        currentWorker.addEventListener('message', handleMessage);
    }

    worker = worker || currentWorker;

    return worker;
}