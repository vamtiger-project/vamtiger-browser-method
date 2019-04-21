import { LoadScriptsParams, LoadedScripts } from './vamtiger-browser-method';
import loadScript from './load-script';

export default function <P extends LoadScriptsParams>(params: P) {
    const scripts = Promise.all(params.map(loadScript)) as Promise<LoadedScripts<P>>;

    return scripts
}