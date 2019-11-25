"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(params) {
    var VamtigerBrowserMethod = self.VamtigerBrowserMethod;
    var queue = VamtigerBrowserMethod.queue;
    var urlPattern = params.url;
    var urlRegex = new RegExp(urlPattern);
    var urls = Array.from(queue.keys());
    var url = urls.find(function (currentUrl) { return currentUrl.match(urlRegex); })
        || '';
    return url;
}
exports.default = default_1;
//# sourceMappingURL=get-url-from-queue.js.map