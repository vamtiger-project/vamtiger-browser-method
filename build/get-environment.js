"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
function default_1() {
    var environment = self.hasOwnProperty('WorkerGlobalScope')
        && types_1.Environment.worker
        || types_1.Environment.window;
    return environment;
}
exports.default = default_1;
//# sourceMappingURL=get-environment.js.map