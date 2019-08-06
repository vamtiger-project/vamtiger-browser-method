"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var dequeue_1 = require("./dequeue");
var actionMethod = (_a = {},
    _a[types_1.HandleJsonLdAction.dequeue] = dequeue_1.default,
    _a);
function default_1(currentParams) {
    var detail = currentParams.detail;
    var actionName = detail.action, params = detail.params;
    var action = getAction(actionName);
    var actionParams = __assign({}, params, getParams(actionName));
    var result = action(actionParams);
    return result;
}
exports.default = default_1;
function getParams(action) {
    var _a;
    var VamtigerBrowserMethod = self.VamtigerBrowserMethod;
    var queue = VamtigerBrowserMethod.queue;
    var params = (_a = {},
        _a[types_1.HandleJsonLdAction.dequeue] = { queue: queue },
        _a);
    var currentParams = params[action];
    return currentParams;
}
function getAction(actionName) {
    var action = actionMethod[actionName];
    return action;
}
//# sourceMappingURL=handle-json-ld.js.map