import {
    getDependencies
} from './config';
import loadScript from './load-script';
import isWindow from './is-window';

export default async function () {
    isWindow() && await loadDependencies();
}

async function loadDependencies() {
    const workerDependency = true;
    const dependencies = getDependencies();

    await Promise.all(dependencies.map(src => loadScript({name: src, src, workerDependency})));;
}