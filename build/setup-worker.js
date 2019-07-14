"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var handle_message_1 = require("./handle-message");
var is_worker_1 = require("./is-worker");
var remove_redundant_scripts_1 = require("./remove-redundant-scripts");
function default_1() {
    is_worker_1.default() && setupWorker();
}
exports.default = default_1;
function setupWorker() {
    addEventListener('message', handle_message_1.default);
    return remove_redundant_scripts_1.default({
        selector: types_1.selector.redundantScripts
    });
}
//# sourceMappingURL=setup-worker.js.map