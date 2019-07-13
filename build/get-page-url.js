"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var slash = types_1.StringConstant.slash;
var trailingHtml = types_1.regex.trailingHtml;
function default_1() {
    var relativePath = location.pathname;
    var urlPaths = relativePath.match(trailingHtml) && relativePath.split(slash);
    var pageUrl = urlPaths && urlPaths.slice(0, urlPaths.length - 1).join(slash)
        || relativePath;
    return pageUrl;
}
exports.default = default_1;
//# sourceMappingURL=get-page-url.js.map