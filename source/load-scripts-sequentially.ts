import { LoadScriptsSequentiallyParams, LoadedScriptsSequentially, LoadScriptParams } from './vamtiger-browser-method';
import loadScript from './load-script';

export default <P extends LoadScriptParams[][]>(params: P) => new Promise((resolve: (scripts: LoadedScriptsSequentially<P>) => void, reject) => {
    let scripts = new Set();
    let load = Promise.resolve();

    params.forEach(scriptParams => {
        load = load
            .then(async () => await Promise.all(scriptParams.map(loadScript)))
            .then(loadedScripts => loadedScripts.forEach(script => scripts.add(script)))
    });

    load = load.then(() => resolve(Array.from(scripts) as LoadedScriptsSequentially<P>));

    return load;
});