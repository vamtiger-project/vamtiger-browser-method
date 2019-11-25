"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var is_window_1 = require("./is-window");
var is_worker_1 = require("./is-worker");
var send_message_1 = require("./send-message");
var requestIdleCallback = self.requestIdleCallback;
function default_1(params) {
    if (is_window_1.default() && requestIdleCallback) {
        if (requestIdleCallback) {
            requestIdleCallback(importDependenciesWindow);
        }
        else {
            setTimeout(importDependenciesWindow, 0);
        }
    }
    else if (is_worker_1.default()) {
        importDependenciesWorker(params);
    }
}
exports.default = default_1;
function importDependenciesWindow() {
    var metaElement = self["vamtiger-browser-method"];
    var dependencyUrlMetaElement = metaElement.querySelector(types_1.Selector.dependencyUrlMetaElement);
    var urlMetaElements = dependencyUrlMetaElement && Array.from(dependencyUrlMetaElement.querySelectorAll(types_1.Selector.urlMetaElement)) || [];
    var urls = urlMetaElements
        .map(function (_a) {
        var dataset = _a.dataset;
        return dataset.url || '';
    })
        .filter(function (url) { return url; });
    var message = {
        action: types_1.MessageAction.importDependencies,
        params: { urls: urls },
        workerType: types_1.WorkerType.all
    };
    send_message_1.default(message);
}
function importDependenciesWorker(_a) {
    var _b = _a.urls, urls = _b === void 0 ? [] : _b;
    var importScripts = self.importScripts;
    var action = types_1.MessageAction.removeDependencyUrl;
    importScripts && urls.forEach(function (url) {
        importScripts(url);
        send_message_1.default({ action: action, params: { url: url } });
    });
}
//# sourceMappingURL=import-dependencies.js.map