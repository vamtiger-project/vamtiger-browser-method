import {
    ILoadScript,
    ErrorMessage,
    LocalScriptParams,
    LocalStylesheetScriptParams,
    ILoadRemoteStylesheetScriptParams,
    ILoadRemoteScriptParams,
    ILoadJsonScriptParams,
    LoadScriptElement,
    LoadedScript,
    LinkRel,
    ScriptAttribute,
    ScriptType
} from './types';
import loadElementQueryCss from './load-element-query-css';

const { failedToLoadScript } = ErrorMessage;
const { stylesheet } = LinkRel;
const { script: scriptElement, link, style } = LoadScriptElement;

export default <P extends ILoadScript['params']>(params: P) => new Promise((resolve: (script: LoadedScript<P>) => void, reject: ILoadScript['reject']) => {
    const { head, body } = document;
    const { js, name: scriptName, jsonld, removeFromDom } = params as LocalScriptParams;
    const { src } = params as ILoadRemoteScriptParams;
    const { css, name: stylesheetName } = params as LocalStylesheetScriptParams;
    const { href } = params as ILoadRemoteStylesheetScriptParams;
    const { json } = params as ILoadJsonScriptParams;
    const remoteScript = params.hasOwnProperty('src') || params.hasOwnProperty('href');
    const element = (js || json|| src) && scriptElement
        || css && style
        || href && link;
    const selector = src && `script[src="${src}"]`
        || href && `link[href="${href}"]`
        || js && scriptName && `script[data-name="${scriptName}"]`
        || jsonld && scriptName && `script[data-name="${scriptName}"][type="${ScriptType.jsonld}"]`
        || css && stylesheetName && `style[data-name="${stylesheetName}"]`;
    const existingScript = (head.querySelector(selector) || body.querySelector(selector)) as LoadedScript<P>;
    const script = selector
        && element
        && document.createElement(element) as LoadedScript<P>;

    if (script instanceof HTMLScriptElement) {
        if (src) {
            script.src = src;
        } else if (json || js) {
            script.innerHTML = json || js;
            script.dataset.name = scriptName;

            if (jsonld) {
                script.setAttribute(ScriptAttribute.type, ScriptType.jsonld);
            } else if (json) {
                script.setAttribute(ScriptAttribute.type, ScriptType.json);
            }
        }
    } else if (script instanceof HTMLLinkElement) {
        script.rel = stylesheet;
        script.href = href;
    } else if (script instanceof HTMLStyleElement) {
        script.innerHTML = css;
        script.dataset.name = stylesheetName;

        loadElementQueryCss({
            css,
            stylesheetName
        });
    }

    if (existingScript) {
        resolve(existingScript);
    } else if (script) {
        script.addEventListener('load', handleLoad);
        script.addEventListener('error', handleLoadError);

        head.appendChild(script);

        if (!remoteScript) {
            handleLoad();
        }
    }

    function handleLoad() {
        if (script) {
            removeEventListeners();

            if (removeFromDom) {
                head.removeChild(script);
            }

            resolve(script);
        }
    }

    function handleLoadError(event: Event) {
        removeEventListeners();

        console.error(event);

        reject(new Error(`${failedToLoadScript}`));
    }

    function removeEventListeners() {
        if (script) {
            script.removeEventListener('load', handleLoad);
            script.removeEventListener('error', handleLoadError);
        }
    }
});