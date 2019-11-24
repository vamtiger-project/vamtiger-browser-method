import {
    Selector,
    ScriptType,
    StringConstant
} from './types';

const params = {
    type: ScriptType.js
}
const { newline } = StringConstant;

export default function () {
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
    const workerUrl = workerBlob && createObjectURL && createObjectURL(workerBlob)
        || workderScript && workderScript.src;

    return workerUrl;
}