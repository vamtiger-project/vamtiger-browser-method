"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var is_window_1 = require("./is-window");
var requestIdleCallback = self.requestIdleCallback;
function default_1(params) {
    if (is_window_1.default()) {
        if (requestIdleCallback) {
            requestIdleCallback(function () { return removeDependencyUrlWindow(params); });
        }
        else {
            setTimeout(function () { return removeDependencyUrlWindow(params); }, 0);
        }
    }
}
exports.default = default_1;
function removeDependencyUrlWindow(_a) {
    var url = _a.url;
    var metaElement = self["vamtiger-browser-method"];
    var dependencyUrlMetaElement = metaElement.querySelector(types_1.Selector.dependencyUrlMetaElement);
    var selector = "meta[data-url=\"" + url + "\"]";
    var urlMetaElement = dependencyUrlMetaElement && dependencyUrlMetaElement.querySelector(selector);
    if (urlMetaElement && dependencyUrlMetaElement) {
        dependencyUrlMetaElement.removeChild(urlMetaElement);
    }
}
//# sourceMappingURL=remove-dependency-url.js.map