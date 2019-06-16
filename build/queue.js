"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var timeout = types_1.TimeoutDuration.webComponent;
function default_1(_a) {
    var key = _a.key, resolve = _a.resolve, reject = _a.reject;
    var VamtigerBrowserMethod = self.VamtigerBrowserMethod;
    var queueEntry = {
        resolve: resolve,
        reject: reject
    };
    var messageQueue = VamtigerBrowserMethod.messageQueue;
    var queue;
    !messageQueue.has(key) && messageQueue.set(key, new Set());
    queue = messageQueue.get(key);
    queue && queue.add(queueEntry);
    setTimeout(function () { return handleExpiredQueueEntry({ key: key, queueEntry: queueEntry }); }, timeout);
}
exports.default = default_1;
function handleExpiredQueueEntry(_a) {
    var key = _a.key, queueEntry = _a.queueEntry;
    var VamtigerBrowserMethod = self.VamtigerBrowserMethod;
    var messageQueue = VamtigerBrowserMethod.messageQueue;
    var queue = messageQueue.get(key);
    if (queue) {
        queue.has(queueEntry) && queue.delete(queueEntry);
        !queue.size && messageQueue.delete(key);
    }
}
//# sourceMappingURL=queue.js.map