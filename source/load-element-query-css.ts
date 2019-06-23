import {
    ILoadElementQueryCss,
    MetaElementName,
    StringConstant,
    regex
} from './types';
import getMetaElment from './get-meta-element';
import loadDependencies from './load-dependencies';

const { requestIdleCallback } = self;
const { showRootHost } = regex;
const { nothing } = StringConstant;

export default function(params: ILoadElementQueryCss) {return new Promise(async (resolve, reject) => {
    await loadDependencies();

    if (requestIdleCallback) {
        requestIdleCallback(() => loadElementQueryCss(params).then(resolve));
    } else {
        loadElementQueryCss(params).then(resolve);
    }
})}

async function loadElementQueryCss({ css, stylesheetName: currentStylesheetName = nothing, hostName = nothing }: ILoadElementQueryCss) {
    const { _ } = self;
    const { camelCase } = _;
    const metaElement = getMetaElment({
        properties: {
            id: MetaElementName.loadElementQueryCss
        }
    });
    const stylesheetName = camelCase(currentStylesheetName);
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

    return true;
}