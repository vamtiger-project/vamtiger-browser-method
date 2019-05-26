import {
    ILoadElementQueryCss,
    MetaElementName,
    StringConstant,
    regex
} from './types';
import getMetaElment from './get-meta-element';
import getCamelCase from './get-camel-case';

const { showRootHost } = regex;
const { nothing } = StringConstant;

export default function({ css, stylesheetName: currentStylesheetName = nothing, hostName = nothing }: ILoadElementQueryCss) {
    const metaElement = getMetaElment({
        properties: {
            id: MetaElementName.loadElementQueryCss
        }
    });
    const stylesheetName = getCamelCase(currentStylesheetName);
    const { dataset } = metaElement;
    const elementQueryCss = !dataset.hasOwnProperty(hostName) && (hostName && css.replace(showRootHost, hostName)) || css;
    const { EQCSS } = self;

    if (elementQueryCss && EQCSS) {
        EQCSS.register(EQCSS.parse(elementQueryCss));

        if (stylesheetName) {
            dataset[stylesheetName] = nothing;
        } else if (hostName) {
            dataset[hostName] = nothing;
        }
    }
}