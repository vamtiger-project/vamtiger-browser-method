export * from './load-ts-lib';
import loadScript from './load-script';
import loadShadowStylesheet from './load-shadow-stylesheet';
import defineCustomElement from './define-custom-element';

const VamtigerBrowserMethod = {
    loadScript,
    loadShadowStylesheet,
    defineCustomElement
};

try {
    window.VamtigerBrowserMethod = VamtigerBrowserMethod;
} catch(error) {
    global.VamtigerBrowserMethod = VamtigerBrowserMethod;
}