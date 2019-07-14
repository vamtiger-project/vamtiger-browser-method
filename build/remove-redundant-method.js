"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var requestIdleCallback = self.requestIdleCallback;
function default_1(params) {
    if (requestIdleCallback) {
        requestIdleCallback(function () { return wrapMethod(params); });
    }
    else {
        setTimeout(function () { return wrapMethod(params); }, 0);
    }
}
exports.default = default_1;
function wrapMethod(_a) {
    var name = _a.name;
    var VamtigerBrowserMethod = self.VamtigerBrowserMethod;
    var method = VamtigerBrowserMethod.method;
    delete method[name];
}
//# sourceMappingURL=remove-redundant-method.js.map