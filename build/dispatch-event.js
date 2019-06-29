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
Object.defineProperty(exports, "__esModule", { value: true });
var is_window_1 = require("./is-window");
var eventParams = {
    bubbles: true
};
function default_1(params) {
    is_window_1.default() && postWindowMessage(params);
}
exports.default = default_1;
function postWindowMessage(_a) {
    var eventName = _a.eventName, _b = _a.detail, detail = _b === void 0 ? {} : _b;
    var event = new CustomEvent(eventName, __assign({}, eventParams, { detail: detail }));
    self.dispatchEvent(event);
}
//# sourceMappingURL=dispatch-event.js.map