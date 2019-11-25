"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
function default_1() {
    var head = document.head;
    var script = head.querySelector(types_1.selector.vamtigerBrowserMethod);
    var src = script && script.src;
    var paths = src && src.split(types_1.StringConstant.slash);
    var parentUrl = paths && paths
        .slice(0, paths.length - 1)
        .join(types_1.StringConstant.slash);
    return parentUrl;
}
exports.default = default_1;
//# sourceMappingURL=get-parent-url.js.map