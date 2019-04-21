import loadScript from './load-script';
import loadScripts from './load-scripts';
import loadScriptsSequentially from './load-scripts-sequentially';
import loadShadowStylesheet from './load-shadow-stylesheet';
import defineCustomElement from './define-custom-element';
import pause from './pause';
import getElement from './get-element';

const { VamtigerBrowserMethod } = window;
const vamtigerBrowserMethod = {
    loadScript,
    loadScripts,
    loadScriptsSequentially,
    loadShadowStylesheet,
    defineCustomElement,
    pause,
    getElement
};

try {
    if (!VamtigerBrowserMethod) {
        window.VamtigerBrowserMethod = vamtigerBrowserMethod;
    }
} catch(error) {
    global.VamtigerBrowserMethod = VamtigerBrowserMethod;
}
