import loadScripts from './load-scripts';
import loadShadowStylesheet from './load-shadow-stylesheet';
import defineCustomElement from './define-custom-element';
import getElement from './get-element';
import getData from './get-data';
const vamtigerBrowserMethod: {
    loadScript: <P extends import("./types").ILoadRemoteScriptParams | import("./types").ILoadRemoteStylesheetScriptParams | import("./types").LocalScriptParams | import("./types").LocalStylesheetScriptParams>(params: P) => Promise<import("./types").LoadedScript<P>>;
    loadScripts: typeof loadScripts;
    loadScriptsSequentially: <P extends (import("./types").ILoadRemoteScriptParams | import("./types").ILoadRemoteStylesheetScriptParams | import("./types").LocalScriptParams | import("./types").LocalStylesheetScriptParams)[][]>(params: P) => Promise<import("./types").LoadedScriptsSequentially<P>>;
    loadShadowStylesheet: typeof loadShadowStylesheet;
    defineCustomElement: typeof defineCustomElement;
    pause: ({ milliseconds }: import("./types").IPause) => Promise<{}>;
    getElement: typeof getElement;
    getData: typeof getData;
};
declare global {
    interface Window {
        VamtigerBrowserMethod: typeof vamtigerBrowserMethod;
    }
}
export {};
