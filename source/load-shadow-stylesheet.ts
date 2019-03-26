import { ILoadShadowStylesheet, Selector } from './types';

export default function ({ css, element }: ILoadShadowStylesheet) {
    const { EQCSS } = window;
    const { shadowRoot } = element;
    const lastStylesheet = shadowRoot && shadowRoot.querySelector(Selector.lastStylesheet);
    const stylesheet = shadowRoot && document.createElement('style');

    if (stylesheet && shadowRoot) {
        stylesheet.innerHTML = css;

        if (lastStylesheet && lastStylesheet.nextElementSibling) {
            shadowRoot.insertBefore(stylesheet, lastStylesheet.nextElementSibling);
        } else {
            shadowRoot.appendChild(stylesheet);
        }

        EQCSS && EQCSS.register(EQCSS.parse(css));
    }
}