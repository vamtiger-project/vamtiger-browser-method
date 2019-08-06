"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(_a) {
    var key = _a.key, data = _a.data, currentQueue = _a.queue;
    var VamtigerBrowserMethod = self.VamtigerBrowserMethod;
    var messageQueue = VamtigerBrowserMethod.messageQueue;
    var queue = (currentQueue || messageQueue).get(key) || new Set();
    Array.from(queue).forEach(function (queueEntry) {
        queueEntry.resolve(data);
        queue.delete(queueEntry);
    });
}
exports.default = default_1;
//# sourceMappingURL=dequeue.js.map