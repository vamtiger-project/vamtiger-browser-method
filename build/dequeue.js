"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(_a) {
    var key = _a.key, _b = _a.match, match = _b === void 0 ? false : _b, data = _a.data, currentQueue = _a.queue;
    var VamtigerBrowserMethod = self.VamtigerBrowserMethod;
    var messageQueue = VamtigerBrowserMethod.messageQueue;
    var keyRegex = match && new RegExp("^" + key);
    var queueKey = keyRegex && Array
        .from((currentQueue || messageQueue).keys())
        .find(function (key) { return key.match(keyRegex); })
        || key;
    var queue = (currentQueue || messageQueue).get(queueKey) || new Set();
    Array.from(queue).forEach(function (queueEntry) {
        queueEntry.resolve(data);
        queue.delete(queueEntry);
    });
}
exports.default = default_1;
//# sourceMappingURL=dequeue.js.map