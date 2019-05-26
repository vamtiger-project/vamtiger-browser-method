import {
    selector as Selector
} from './types';
import isWindow from './is-window';

const { redundantScripts: selector } = Selector;

export default function () {
    isWindow() && removeRedundantScripts();
}

function removeRedundantScripts() {
    const { head } = document;
    const scripts = Array.from(head.querySelectorAll<HTMLScriptElement>(selector));
    const result = undefined;

    scripts.forEach(script => head.removeChild(script));

    return result;
}