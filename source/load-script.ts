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
    ScriptType,
    StringConstant,
    regex
} from './types';
import loadElementQueryCss from './load-element-query-css';
import getTranspiledJs from './get-transpiled-js';

const { failedToLoadScript } = ErrorMessage;
const { stylesheet } = LinkRel;
const { script: scriptElement, link, style } = LoadScriptElement;
const { remoteUrl } = regex;
const { nothing } = StringConstant

export default <P extends ILoadScript['params']>(params: P) => new Promise(async (resolve: (script: LoadedScript<P>) => void, reject: ILoadScript['reject']) => {
    console.log(params);
    const { head, body } = document;
    const { js, name: scriptName, jsonld, removeFromDom, transpileJs } = params as LocalScriptParams;
    const { src } = params as ILoadRemoteScriptParams;
    const transpiledJs = transpileJs && (js || src && !src.match(remoteUrl)) && await getTranspiledJs({ js, url: src}) || '';
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
        if (!transpiledJs && src) {
            script.src = src;
        } else if (json || transpiledJs || js) {
            script.innerHTML = json || transpiledJs || js;
            script.dataset.name = scriptName;

            if (jsonld) {
                script.setAttribute(ScriptAttribute.type, ScriptType.jsonld);

                script.dataset.jsonLd = script.dataset.name;
            } else if (json) {
                script.setAttribute(ScriptAttribute.type, ScriptType.json);
            } else if (transpiledJs) {
                script.dataset.transpiledJs = nothing;
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

        if (transpileJs || !remoteScript) {
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