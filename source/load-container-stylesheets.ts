
import {
    ILoadContainerStylesheets,
    ScriptNameSuffix,
    StringConstant,
    Selector
} from './types';
import loadScript from './load-script'

const { dash } = StringConstant;

export default function(params: ILoadContainerStylesheets) { return new Promise((resolve: (styleElements: HTMLStyleElement[]) => void, reject) => {
    const { requestIdleCallback } = window;

    if (requestIdleCallback) {
        requestIdleCallback(() => loadStylesheets(params, resolve));
    } else {
        loadStylesheets(params, resolve);
    }
})};

async function loadStylesheets(params: ILoadContainerStylesheets, resolve: (styleElements: HTMLStyleElement[]) => void) {
    const { container, name } = params;
    const styles = Array
        .from(container.content.querySelectorAll<HTMLStyleElement>(Selector.style))
        .map((style, index) => ({
            name: [
                name,
                ScriptNameSuffix.style,
                index++
            ].join(dash),
            css: style.innerHTML
        }));
    const stylesheets = Array
        .from(container.content.querySelectorAll<HTMLLinkElement>(Selector.stylesheet))
        .map((stylesheet, index) => ({
            name: [
                name,
                ScriptNameSuffix.stylesheet,
                index++
            ].join(dash),
            href: stylesheet.href
        }));
    const styleElements = await Promise.all([
        ...styles.map(loadScript),
        ...stylesheets.map(loadScript)
    ]);

    resolve(styleElements);
}