"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var is_window_1 = require("./is-window");
var is_worker_1 = require("./is-worker");
var is_service_worker_1 = require("./is-service-worker");
var send_message_from_service_worker_1 = require("./send-message-from-service-worker");
var stringify = JSON.stringify;
var textEncoder = new TextEncoder();
function default_1(params) {
    var VamtigerBrowserMethod = self.VamtigerBrowserMethod;
    var worker = VamtigerBrowserMethod.worker, support = VamtigerBrowserMethod.support;
    var textEncoderSupport = (support || {}).textEncoder;
    var stringMessage = stringify(params);
    var message = textEncoderSupport && textEncoder.encode(stringMessage)
        || stringMessage;
    is_window_1.default() && worker && worker.postMessage(message);
    is_worker_1.default() && types_1.sendMessageFromWorker && types_1.sendMessageFromWorker(message);
    is_service_worker_1.default() && send_message_from_service_worker_1.default({ message: message });
}
exports.default = default_1;
//# sourceMappingURL=send-message.js.map