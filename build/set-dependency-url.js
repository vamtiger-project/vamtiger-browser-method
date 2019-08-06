"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var is_window_1 = require("./is-window");
var requestIdleCallback = self.requestIdleCallback;
var params = {
    type: types_1.ScriptType.js
};
function default_1(_a) {
    var script = _a.script;
    var js = script.innerHTML;
    if (js && is_window_1.default()) {
        if (requestIdleCallback) {
            requestIdleCallback(function () { return setDependencyUrlWindow({ js: js }); });
        }
        else {
            setTimeout(function () { return setDependencyUrlWindow({ js: js }); }, 0);
        }
    }
}
exports.default = default_1;
function setDependencyUrlWindow(_a) {
    var js = _a.js;
    var metaElement = self["vamtiger-browser-method"];
    var createObjectURL = URL.createObjectURL;
    var dependencyUrlMetaElement = metaElement.querySelector(types_1.Selector.dependencyUrlMetaElement);
    var blob = new Blob([js], params);
    var url = createObjectURL(blob);
    var selector = "meta[data-url=\"" + url + "\"]";
    var existingUrlMetaElement = dependencyUrlMetaElement && dependencyUrlMetaElement.querySelector(selector);
    var urlMetaElement = !existingUrlMetaElement && document.createElement('meta');
    if (urlMetaElement && dependencyUrlMetaElement) {
        urlMetaElement.dataset.url = url;
        dependencyUrlMetaElement.appendChild(urlMetaElement);
    }
}
//# sourceMappingURL=set-dependency-url.js.map