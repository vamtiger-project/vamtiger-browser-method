import { LoadScriptsSequentiallyParams, LoadedScriptsSequentially } from './types';
import loadScript from './load-script';

export default async function <P extends LoadScriptsSequentiallyParams>(params: P) {
    const scriptGroups = await Promise.all(params.map(async currentParams => await Promise.all(currentParams.map(loadScript))));
    const scripts = scriptGroups.reduce((scripts = [], scriptGroup) => scripts.concat(scriptGroup)) as LoadedScriptsSequentially<P>;

    return scripts;
}