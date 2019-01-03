import { 
    ILoadScript, 
    ErrorMessage,
    LocalScriptParams,
    LocalStylesheetScriptParams,
    ILoadRemoteStylesheetScriptParams,
    ILoadRemoteScriptParams,
    LoadScriptElement,
    LoadedScript,
    LinkRel
} from './types';

const { failedToLoadScript } = ErrorMessage;
const { stylesheet } = LinkRel;
const { script: scriptElement, link, style } = LoadScriptElement;

export default <P extends ILoadScript['params']>(params: P) => new Promise((resolve: (script: LoadedScript<P>) => void, reject: ILoadScript['reject']) => {
    const { head, body } = document;
    const { js, name: scriptName } = params as LocalScriptParams;
    const { src } = params as ILoadRemoteScriptParams;
    const { css, name: stylesheetName } = params as LocalStylesheetScriptParams;
    const { href } = params as ILoadRemoteStylesheetScriptParams;
    const remoteScript = params.hasOwnProperty('src') || params.hasOwnProperty('href');
    const element = (js || src) && scriptElement
        || css && style
        || href && link;
    const selector = src && `script[src="${src}"]`
        || href && `link[href="${href}"]`
        || js && scriptName && `script[data-name="${scriptName}"`
        || css && stylesheetName && `style[data-name="${stylesheetName}"`;
    const existingScript = (head.querySelector(selector) || body.querySelector(selector)) as LoadedScript<P>;
    const script = selector 
        && element
        && document.createElement(element) as LoadedScript<P>;
        
    if (script instanceof HTMLScriptElement) {
        if (src) {
            script.src = src;
        } else if (js) {
            script.innerHTML = js;
            script.dataset.name = scriptName;
        }
    } else if (script instanceof HTMLLinkElement) {
        script.rel = stylesheet;
        script.href = href;
    } else if (script instanceof HTMLStyleElement) {
        script.innerHTML = css;
        script.dataset.name = stylesheetName;
    }

    if (existingScript) {
        resolve(existingScript);
    } else if (script) {
        head.appendChild(script);

        if (remoteScript) {
            script.addEventListener('load', handleLoad);
            script.addEventListener('error', handleLoadError);
        } else {
            resolve(script);
        }
    }

    function handleLoad(event: Event) {
        if (script) {
            script.removeEventListener('load', handleLoad);

            resolve(script);
        }
    }

    function handleLoadError(event: Event) {
        if (script) {
            script.removeEventListener('error', handleLoadError);
        }

        console.error(event);
        
        reject(new Error(`${failedToLoadScript}`));
    }
});