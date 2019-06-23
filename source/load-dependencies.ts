import {
    getDependencies
} from './config';
import loadScript from './load-script';
import isWindow from './is-window';

let loaded = false

export default async function () {
    isWindow() && await loadDependencies();
}

async function loadDependencies() {
    const dependencies = !loaded && getDependencies() || [];

    await Promise.all(dependencies.map(src => loadScript({name: src, src})))
        .then(() => loaded = true);

    return loaded;
}