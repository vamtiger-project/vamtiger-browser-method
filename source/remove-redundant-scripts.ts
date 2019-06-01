import {
    MessageAction,
    IRemoveRedundantScripts
} from './types';
import isWindow from './is-window';
import isWorker from './is-worker';
import sendMessage from './send-message';

export default function (params: IRemoveRedundantScripts) {
    isWindow() && removeRedundantScripts(params);

    isWorker() && sendRemoveRedundantScriptsMessage(params);
}

function removeRedundantScripts({ selector }: IRemoveRedundantScripts) {
    const { head } = document;
    const scripts = Array.from(head.querySelectorAll<HTMLScriptElement>(selector));

    scripts.forEach(script => head.removeChild(script));
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