import {
    Selector,
    ScriptType,
    StringConstant
} from './types';
import handleMessage from './handle-message';
import getLocalHostWorkerUrl from './get-local-host-worker-url';

const { stringify } = JSON;
const params = {
    type: ScriptType.js
}
const { newline } = StringConstant;

let worker: Worker;

export default async function () {
    const localHostWorkerUrl = await getLocalHostWorkerUrl();
    const { head } = document;
    const { createObjectURL } = URL;
    const workderScript = head.querySelector<HTMLScriptElement>(Selector.vamtigerBrowserMethod);
    const workerDependecies = (Array.from(head.querySelectorAll<HTMLScriptElement>(Selector.workderDependency)) || [])
        .map(({ innerHTML }) => innerHTML)
        .filter(script => script);
    const workerScripts = [
        ...workerDependecies,
        workderScript && workderScript.innerHTML || ''
    ].filter(script => script).join(newline.repeat(2));
    const workerBlob = workerScripts && workerScripts.length && new Blob([workerScripts], params);
    const workerUrl = workerBlob && createObjectURL && createObjectURL(workerBlob);
    const currentWorker = workerUrl && new Worker(localHostWorkerUrl || workerUrl);

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