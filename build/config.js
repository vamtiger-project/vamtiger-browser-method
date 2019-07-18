"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
exports.babel = {
    presets: ['es2015']
};
exports.jsonLdEntryValueType = new Set([
    typeof 1,
    typeof '',
    typeof true
]);
exports.dependencyPaths = Array.from(new Set([
    'lodash/lodash.min.js'
]));
exports.getDependencies = function () { return [
    !self._ && types_1.Dependency.lodash || ''
].filter(function (dependency) { return dependency; }); };
exports.intersectionObserverThreshold = getIntersectionObserverThreshold(5);
exports.intersectionObserver = {
    root: null,
    rootMargin: '0px',
    threshold: exports.intersectionObserverThreshold
};
exports.serviceWorker = {
    scope: '/'
};
exports.serviceWorkerClients = {
    includeUncontrolled: true
};
function getIntersectionObserverThreshold(length) {
    var step = 1 / length;
    var threshold = Array(length)
        .fill(undefined)
        .map(function (value, index) { return index ? (index + 1) * step : index; });
    return threshold;
}
//# sourceMappingURL=config.js.map