"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var is_window_1 = require("./is-window");
var is_worker_1 = require("./is-worker");
var is_service_worker_1 = require("./is-service-worker");
function default_1() {
    var environment = is_worker_1.default() && types_1.Environment.worker
        || is_service_worker_1.default() && types_1.Environment.serviceWorker
        || is_window_1.default() && types_1.Environment.window
        || types_1.Environment.unknown;
    return environment;
}
exports.default = default_1;
//# sourceMappingURL=get-environment.js.map