import { LoadScriptsSequentiallyParams, LoadedScriptsSequentially, LoadScriptParams, LoadedScript } from './types';
import loadScripts from './load-scripts';

export default <P extends LoadScriptsSequentiallyParams>(params: P) => new Promise((resolve: (scripts: LoadedScriptsSequentially<P>) => void, reject) => {
    let scripts = [] as any;
    let load = Promise.resolve();

    params.forEach(scriptParams => {
        load = load
            .then(() => loadScripts(scriptParams))
            .then(loadedScripts => loadedScripts.forEach(script =>scripts.push(script)))
    });

    load = load.then(() => resolve(scripts));

    return load;
});