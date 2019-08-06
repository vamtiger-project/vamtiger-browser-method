import {
    ILoadScript,
    ILoadScriptLoadJsJsonJs,
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
    regex,
    Selector
} from './types';
import loadElementQueryCss from './load-element-query-css';
import getTranspiledJs from './get-transpiled-js';
import removeRedundantScripts from './remove-redundant-scripts';

const { parse } = JSON;
const { failedToLoadScript } = ErrorMessage;
const { stylesheet } = LinkRel;
const { script: scriptElement, link, style } = LoadScriptElement;
const { remoteUrl, jsJsonJs, jsonJs, trailingJs } = regex;
const { nothing, slash } = StringConstant;

export default function<P extends ILoadScript['params']>(params: P) {
    return loadScript(params);
}

function loadScript<P extends ILoadScript['params']>(params: P) {return new Promise(async (resolve: (script: LoadedScript<P>) => void, reject: ILoadScript['reject']) => {
    const { head, body } = document;
    const {
        js,
        name: scriptName,
        jsonld,
        removeFromDom,
        workerDependency = false
    } = params as LocalScriptParams;
    const { src } = params as ILoadRemoteScriptParams;
    const transpiledJs = (js || src && !src.match(remoteUrl)) && await getTranspiledJs({ js, url: src}) || '';
    const { css, name: stylesheetName } = params as LocalStylesheetScriptParams;
    const { href } = params as ILoadRemoteStylesheetScriptParams;
    const { json } = params as ILoadJsonScriptParams;
    const remoteScript = params.hasOwnProperty('src') || params.hasOwnProperty('href');
    const element = (js || json || src) && scriptElement
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
            script.dataset.name = scriptName || src;

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

        await loadElementQueryCss({
            css,
            stylesheetName
        });
    }

    if (existingScript) {
        resolve(existingScript);
    } else if (script) {
        head.appendChild(script);

        if (remoteScript) {
            script.addEventListener('load', handleLoad);
            script.addEventListener('error', handleLoadError);
        }

        if (workerDependency) {
            script.dataset.workerDependency = nothing;
        }

        if (transpiledJs || !remoteScript) {
            handleLoad();
        }
    }

    async function handleLoad() {
        if (script) {
            removeEventListeners();

            if (removeFromDom) {
                head.removeChild(script);
            }

            if(src && src.match(jsJsonJs)){
                await loadJsJsonJs({ src, workerDependency });
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
})};

async function loadJsJsonJs({ src, workerDependency }: ILoadScriptLoadJsJsonJs) {
    const { head } = document;
    const paths = src
        .replace(trailingJs, nothing)
        .split(slash);
    const scriptName = paths[paths.length - 1];
    const selector = src && scriptName && `script[type="${ScriptType.json}"][data-name="${scriptName}"]`;
    const jsJsonJsScript = selector && head.querySelector<HTMLScriptElement>(selector);
    const json = jsJsonJsScript && jsJsonJsScript.innerHTML && parse(jsJsonJsScript.innerHTML);
    const js: string = json && json.text;
    const name = src.replace(jsonJs, nothing);
    const removeScriptSelector = [
        `script[src="${src}"]`,
        selector,
        Selector.transpiledJs
    ].join(StringConstant.comma);

    if (name && js) {
        await loadScript({ name, js, workerDependency }).catch(handleError);

        await removeRedundantScripts({selector: removeScriptSelector});
    }
}

function handleError(error: Error) {
    console.warn(error.name);
    console.warn(error.message);
    console.warn(error.stack);
}