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
    var serviceWorker = navigator.serviceWorker;
    var _a = params.workerType, workerType = _a === void 0 ? types_1.WorkerType.worker : _a;
    var VamtigerBrowserMethod = self.VamtigerBrowserMethod;
    var worker = VamtigerBrowserMethod.worker, support = VamtigerBrowserMethod.support;
    var textEncoderSupport = (support || {}).textEncoder;
    var stringMessage = stringify(params);
    var message = textEncoderSupport && textEncoder.encode(stringMessage)
        || stringMessage;
    if (is_window_1.default()) {
        if (workerType === types_1.WorkerType.all) {
            worker && worker.postMessage(message);
            serviceWorker && serviceWorker.controller && serviceWorker.controller.postMessage(message);
        }
        else if (workerType === types_1.WorkerType.worker) {
            worker && worker.postMessage(message);
        }
        else if (workerType === types_1.WorkerType.serviceWorker) {
            serviceWorker && serviceWorker.controller && serviceWorker.controller.postMessage(message);
        }
    }
    else if (is_worker_1.default()) {
        types_1.sendMessageFromWorker && types_1.sendMessageFromWorker(message);
    }
    else if (is_service_worker_1.default()) {
        send_message_from_service_worker_1.default({ message: message });
    }
}
exports.default = default_1;
//# sourceMappingURL=send-message.js.map