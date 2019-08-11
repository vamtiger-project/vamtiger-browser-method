import {
    EventName,
    ILoadMethod
} from './types';
import loadScript from './load-script';
import loadScripts from './load-scripts';
import loadScriptsSequentially from './load-scripts-sequentially';
import loadShadowStylesheet from './load-shadow-stylesheet';
import defineCustomElement from './define-custom-element';
import pause from './pause';
import getElement from './get-element';
import getData from './get-data';
import getEnvironment from './get-environment';
import setupWindow from './setup-window';
import setupWorker from './setup-worker';
import setSupport from './set-support';
import getMicrodataCaption from './get-microdata-caption';
import getJsonLdArray from './get-json-ld-array';
import loadDependencies from './load-dependencies';
import dispatchEvent from './dispatch-event';
import setupServiceWorker from './setup-service-worker';
import loadMethod from './load-method';

const { VamtigerBrowserMethod } = self;
const environment = getEnvironment();
const vamtigerBrowserMethod = {
    loadScript,
    loadScripts,
    loadScriptsSequentially,
    loadMethod: async (params: ILoadMethod) => Boolean(await loadMethod(params)),
    loadShadowStylesheet,
    defineCustomElement,
    pause,
    getElement,
    getData,
    getEnvironment,
    environment,
    queue: new Map(),
    messageQueue: new Map(),
    getMicrodataCaption,
    getJsonLdArray,
    method: {}
};

if (!VamtigerBrowserMethod) {
    self.VamtigerBrowserMethod = vamtigerBrowserMethod;

    Promise
        .resolve(() => setupServiceWorker())
        .then(loadDependencies)
        .then(() => Promise.all([
            setSupport(),
            setupWindow(),
            setupWorker()
        ]))
        .then(() => dispatchEvent({eventName: EventName.vamtigerBrowserMethodReady}))
        .catch(handleError);
}

function handleError(error: Error) {
    console.error(error);
    throw error;
}