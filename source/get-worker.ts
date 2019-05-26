import {
    selector,
    ScriptType
} from './types';
import handleMessage from './handle-message';

const params = {
    type: ScriptType.js
}

let worker: Worker;

export default function () {
    const { head } = document;
    const { createObjectURL } = URL;
    const workerSelector = !worker && selector.worker;
    const workerScripts = (workerSelector && Array.from(head.querySelectorAll<HTMLScriptElement>(workerSelector)) || [])
        .map(({ innerHTML }) => innerHTML)
        .filter(script => script);
    const workerBlob = workerScripts && workerScripts.length && new Blob(workerScripts, params);
    const workerUrl = workerBlob && createObjectURL && createObjectURL(workerBlob);
    const currentWorker = workerUrl && new Worker(workerUrl);

    if (currentWorker) {
        currentWorker.addEventListener('message', handleMessage);
    }

    worker = worker || currentWorker;

    return worker;
}