"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var load_script_1 = require("./load-script");
function default_1(params) {
    var scripts = Promise.all(params.map(load_script_1.default));
    return scripts;
}
exports.default = default_1;
//# sourceMappingURL=load-scripts.js.map