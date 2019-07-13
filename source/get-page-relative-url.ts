import {
   StringConstant,
   regex
} from './types';

const { slash } = StringConstant;
const { trailingHtml } = regex;

export default function () {
    const { pathname: relativePath } = location;
    const urlPaths = relativePath.match(trailingHtml) && relativePath.split(slash);
    const pageUrl = urlPaths && urlPaths.slice(0, urlPaths.length - 1).join(slash)
        || relativePath;

    return pageUrl;
}