import {
    ILoadElementQueryCss,
    MetaElementName,
    StringConstant,
    regex
} from './vamtiger-browser-method';
import getMetaElment from './get-meta-element';
import getCamelCase from './get-camel-case';

export default function({ css, stylesheetName: currentStylesheetName = '', hostName = '' }: ILoadElementQueryCss) {
    const { showRootHost } = regex;
    const { nothing } = StringConstant;
    const metaElement = getMetaElment({
        properties: {
            id: MetaElementName.loadElementQueryCss
        }
    });
    const stylesheetName = getCamelCase(currentStylesheetName);
    const { dataset } = metaElement;
    const elementQueryCss = !dataset.hasOwnProperty(hostName) && (hostName && css.replace(showRootHost, hostName)) || css;
    const { EQCSS } = window;

    if (elementQueryCss && EQCSS) {
        EQCSS.register(EQCSS.parse(elementQueryCss));

        if (stylesheetName) {
            dataset[stylesheetName] = nothing;
        } else if (hostName) {
            dataset[hostName] = nothing;
        }
    }
}