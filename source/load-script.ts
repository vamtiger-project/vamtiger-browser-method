import { ILoadScript, ErrorMessage } from './types';

const { failedToLoadScript } = ErrorMessage

export default ({ src }: ILoadScript['params']) => new Promise((resolve: ILoadScript['resolve'], reject: ILoadScript['reject']) => {
    const { head, body } = document;
    const selector = `script[src="${src}"]`;
    const existingScript: HTMLScriptElement|null = head.querySelector(selector) || body.querySelector(selector);
    const script = (!existingScript && document.createElement('script')) as HTMLScriptElement;

    if (script) {
        script.src = src;
        
        script.addEventListener('load', handleLoad);
        script.addEventListener('error', handleLoadError);

        head.appendChild(script);
    } else if (existingScript) {
        resolve(existingScript);
    }

    function handleLoad(event: Event) {
        script.removeEventListener('load', handleLoad);

        resolve(script);
    }

    function handleLoadError(event: Event) {
        script.removeEventListener('error', handleLoadError);

        reject(new Error(`${failedToLoadScript}: ${script.src}`));
    }
});