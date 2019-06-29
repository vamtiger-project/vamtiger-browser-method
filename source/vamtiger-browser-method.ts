import {
    EventName
} from './types';
export * from './load-ts-lib';
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

const environment = getEnvironment();
const vamtigerBrowserMethod = {
    loadScript,
    loadScripts,
    loadScriptsSequentially,
    loadShadowStylesheet,
    defineCustomElement,
    pause,
    getElement,
    getData,
    getEnvironment,
    environment,
    messageQueue: new Map(),
    getMicrodataCaption,
    getJsonLdArray
};

main().catch(handleError);

async function main() {
    try {
        const { VamtigerBrowserMethod } = self;

        if (!VamtigerBrowserMethod) {
            self.VamtigerBrowserMethod = vamtigerBrowserMethod;

            await loadDependencies();

            await setSupport();

            await setupWindow();

            await setupWorker();

            dispatchEvent({eventName: EventName.vamtigerBrowserMethodReady})
        }
    } catch(error) {
        handleError(error);
    }
}

function handleError(error: Error) {
    console.error(error);
    throw error;
}