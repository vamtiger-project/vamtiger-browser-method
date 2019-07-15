import {
    getDependencies
} from './config';
import loadScript from './load-script';
import isWindow from './is-window';
import isWorker from './is-worker';
import isSeriveWorker from './is-service-worker';

export default async function () {
    if (isWindow()) {
        await loadDependenciesWindow();
    } else if (isWorker() || isSeriveWorker) {
        await loadDependenciesWorker();
    }
}

async function loadDependenciesWindow() {
    const workerDependency = true;
    const dependencies = getDependencies();

    await Promise.all(dependencies.map(src => loadScript({name: src, src, workerDependency})));
}

async function loadDependenciesWorker() {
    const { importScripts } = self;
    const dependencies = getDependencies();

    importScripts && await Promise.all(dependencies.map(url => importScripts(url)));
}