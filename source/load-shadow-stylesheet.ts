import {
    ILoadShadowStylesheet,
    Selector
} from './vamtiger-browser-method';
import loadElementQueryCss from './load-element-query-css';

export default function ({ css, element }: ILoadShadowStylesheet) {
    const {
        shadowRoot,
        localName: hostName
    } = element;
    const lastStylesheet = shadowRoot && shadowRoot.querySelector(Selector.lastStylesheet);
    const stylesheet = shadowRoot && document.createElement('style');

    if (stylesheet && shadowRoot) {
        stylesheet.innerHTML = css;

        if (lastStylesheet && lastStylesheet.nextElementSibling) {
            shadowRoot.insertBefore(stylesheet, lastStylesheet.nextElementSibling);
        } else {
            shadowRoot.appendChild(stylesheet);
        }
    }
}