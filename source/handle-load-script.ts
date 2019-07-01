import {
    ILoadScript,
    LocalScriptParams,
    LocalStylesheetScriptParams
} from './types';
import loadScript from './load-script';
import isWindow from './is-window';
import isTextMode from './is-text-mode';

export default async function<P extends ILoadScript['params']>(params: P) {return new Promise((resolve, reject) => {
    const { requestIdleCallback } = self;

    if (requestIdleCallback) {
        requestIdleCallback(() => isWindow() && loadScriptWindow(params).then(resolve).catch(reject));
    } else {
        setTimeout(() => isWindow() && loadScriptWindow(params).then(resolve).catch(reject), 0);
    }
})}

async function loadScriptWindow<P extends ILoadScript['params']>(params: P) {return new Promise(async (resolve, reject) => {
    const { head } = document;
    const { name, removeExisting } = params as LocalScriptParams;
    const selector = name && removeExisting && `[data-name="${name}"]`;
    const existingScript = selector && head.querySelector<HTMLElement>(selector);
    const ignore = !isTextMode() && existingScript && existingScript.innerHTML === ((params as LocalStylesheetScriptParams).css || (params as LocalScriptParams).js);

    try {
        !ignore && await loadScript(params);

        resolve();
    } catch(error) {
        reject(error);
    }
});}