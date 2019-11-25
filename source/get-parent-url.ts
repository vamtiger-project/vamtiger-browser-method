import {
    selector,
    StringConstant
} from './types';

export default function () {
    const { head } = document;
    const script = head.querySelector<HTMLScriptElement>(selector.vamtigerBrowserMethod);
    const src = script && script.src;
    const paths = src && src.split(StringConstant.slash);
    const parentUrl = paths && paths
        .slice(0, paths.length - 1)
        .join(StringConstant.slash);

    return parentUrl;
}