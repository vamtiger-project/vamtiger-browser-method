"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
function default_1() {
    var VamtigerBrowserMethod = self.VamtigerBrowserMethod;
    var environment = VamtigerBrowserMethod.environment;
    var isWorker = environment === types_1.Environment.worker;
    return isWorker;
}
exports.default = default_1;
//# sourceMappingURL=is-worker.js.map