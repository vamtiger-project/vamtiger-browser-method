import {
    Selector,
    ScriptType,
    StringConstant
} from './types';

const { parse } = JSON;
const params = {
    type: ScriptType.js
}
const { newline } = StringConstant;

export default function () {
    const { head } = document;
    const { createObjectURL } = URL;
    const workerScript = head.querySelector<HTMLScriptElement>(Selector.vamtigerBrowserMethodJs);
    const workerDependecies = (Array.from(head.querySelectorAll<HTMLScriptElement>(Selector.workderDependency)) || [])
        .map(({ innerHTML }) => innerHTML)
        .filter(script => script);
    const workerScripts = [
        ...workerDependecies,
        workerScript && workerScript.innerHTML || ''
    ].filter(script => script).join(newline.repeat(2));
    const workerBlob = workerScripts && workerScripts.length && new Blob([workerScripts], params);
    const workerUrl = workerBlob && createObjectURL && createObjectURL(workerBlob)
        || workerScript && workerScript.src;

    return workerUrl;
}