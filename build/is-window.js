"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
function default_1() {
    var VamtigerBrowserMethod = self.VamtigerBrowserMethod;
    var environment = VamtigerBrowserMethod.environment;
    var isWindow = environment === types_1.Environment.window;
    return isWindow;
}
exports.default = default_1;
//# sourceMappingURL=is-window.js.map