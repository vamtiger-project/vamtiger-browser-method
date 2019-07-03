"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var config_1 = require("./config");
var IntersectionObserver = self.IntersectionObserver, requestIdleCallback = self.requestIdleCallback;
var defaultObserver = IntersectionObserver && new IntersectionObserver(handleIntersect, config_1.intersectionObserver);
function default_1() {
    return defaultObserver;
}
exports.default = default_1;
function handleIntersect(entries, observer) {
    entries.forEach(function (entry) {
        if (requestIdleCallback) {
            requestIdleCallback(function () { return handleIntersectElement(entry); });
        }
        else {
            setTimeout(function () { return handleIntersectElement(entry); }, 0);
        }
    });
}
function handleIntersectElement(entry) {
    var _a = entry, isIntersecting = _a.isIntersecting, intersectionRatio = _a.intersectionRatio, element = _a.target, isVisible = _a.isVisible;
    var dataset = element.dataset;
    if (isIntersecting) {
        dataset[types_1.DataAttribute.visible] = intersectionRatio.toString();
    }
    else {
        delete dataset[types_1.DataAttribute.visible];
    }
}
//# sourceMappingURL=get-intersection-observer.js.map