"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parse = JSON.parse;
function default_1(_a) {
    var script = _a.script;
    var innerHTML = script.innerHTML;
    var isJson = false;
    try {
        parse(innerHTML);
        isJson = true;
    }
    catch (error) {
        console.warn(error);
        isJson = false;
    }
    return isJson;
}
exports.default = default_1;
//# sourceMappingURL=is-json-script.js.map