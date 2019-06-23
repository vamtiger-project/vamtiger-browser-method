"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var is_window_1 = require("./is-window");
var is_worker_1 = require("./is-worker");
function default_1() {
    var prefix = is_window_1.default() && types_1.Prefix.messageIdWindow
        || is_worker_1.default() && types_1.Prefix.messageIdWorker;
    var time = new Date().getTime();
    var messageId = prefix && prefix + "-" + time;
    return messageId;
}
exports.default = default_1;
//# sourceMappingURL=get-message-id.js.map