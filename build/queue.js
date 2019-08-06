"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var timeout = types_1.TimeoutDuration.webComponent;
function default_1(_a) {
    var key = _a.key, resolve = _a.resolve, reject = _a.reject, currentQueue = _a.queue;
    var queueEntry = {
        resolve: resolve,
        reject: reject
    };
    var queue;
    !currentQueue.has(key) && currentQueue.set(key, new Set());
    queue = currentQueue.get(key);
    queue && queue.add(queueEntry);
    setTimeout(function () { return handleExpiredQueueEntry({ key: key, queueEntry: queueEntry, queue: currentQueue }); }, timeout);
}
exports.default = default_1;
function handleExpiredQueueEntry(_a) {
    var key = _a.key, queueEntry = _a.queueEntry, currentQueue = _a.queue;
    var queue = currentQueue.get(key);
    if (queue) {
        queue.has(queueEntry) && queue.delete(queueEntry);
        !queue.size && currentQueue.delete(key);
    }
}
//# sourceMappingURL=queue.js.map