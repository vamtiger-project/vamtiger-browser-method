import {
    MessageAction,
    IRemoveRedundantScripts,
    IRemoveRedundantScriptsRemoveScripts,
    IRemoveRedundantScriptsRemoveScriptsFromParent,
    StringConstant,
    ScriptType,
    Prefix
} from './types';
import isWindow from './is-window';
import isWorker from './is-worker';
import sendMessage from './send-message';
import isJsonScript from './is-json-script';

const { requestIdleCallback } = self;
const { dash } = StringConstant;
const { vamtigerBrowserMethod: prefix } = Prefix;

export default async function (params: IRemoveRedundantScripts) {
    isWindow() && await removeRedundantScripts(params);

    isWorker() && sendRemoveRedundantScriptsMessage(params);
}

async function removeRedundantScripts(params: IRemoveRedundantScripts) {
    const { head: parent } = document;

    await removeScripts({...params, parent});
}

export function removeScripts(params: IRemoveRedundantScriptsRemoveScripts) {return new Promise((resolve, reject) => {
    if (requestIdleCallback) {
        requestIdleCallback(() => removeScriptsFromParent({...params, resolve, reject }));
    } else {
        removeScriptsFromParent({...params, resolve, reject });
    }
})}

function removeScriptsFromParent({ selector, parent, resolve, reject }: IRemoveRedundantScriptsRemoveScriptsFromParent) {
    const { head } = document;
    const scripts = Array.from(parent.querySelectorAll<HTMLScriptElement>(selector));
    const jsScripts = scripts.filter(({type, src}) => src || !type || type === ScriptType.js);
    const jsonScripts = scripts
        .filter(({ type }) => type === ScriptType.json)
        .filter(script => isJsonScript({ script }));
    const jsonLdScripts = scripts
        .filter(({ type }) => type === ScriptType.jsonld)
        .filter(script => isJsonScript({ script }));
    const safeScripts = jsonLdScripts.concat(jsonScripts);
    const time = new Date().getTime();
    const jsonScriptName = jsonScripts.length && [
        prefix,
        ScriptType.json,
        time
    ].join(dash);
    const jsonScriptSelector = jsonScriptName && `script[type="${ScriptType.json}"][data-name="${jsonScriptName}"]`;
    const jsonLdScriptName = jsonLdScripts.length && [
        prefix,
        ScriptType.jsonld,
        time
    ].join(dash);
    const jsonLdScriptSelector = jsonLdScriptName && `script[type="${ScriptType.jsonld}"][data-name="${jsonLdScriptName}"]`;

    jsScripts.length && jsonScriptName && jsScripts.forEach(({ dataset }) => dataset.name = jsonScriptName || '');

    jsonLdScripts.length && jsonLdScriptName && jsonLdScriptSelector && jsonLdScripts.forEach(({ dataset }) => dataset.name = jsonLdScriptName || '');

    if (jsonScriptSelector && parent !== head) {
        parent.dataset.json = jsonScriptSelector;
    }

    if (jsonLdScriptSelector && parent !== head) {
        parent.dataset.jsonLd = jsonLdScriptSelector;
    }

    if (scripts.length) {
        parent.dataset.removedScripts = scripts.length.toString();
    }

    safeScripts.forEach(script => head.appendChild(script));

    scripts.forEach(script => parent.removeChild(script));

    resolve && resolve();
}

export function sendRemoveRedundantScriptsMessage({ selector }: IRemoveRedundantScripts) {
    const massage = {
        action: MessageAction.removeRedundantScripts,
        params: {
            selector
        }
    };

    sendMessage(massage);
}