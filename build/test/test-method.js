"use strict";
var VamtigerBrowserMethod = self.VamtigerBrowserMethod;
var method = VamtigerBrowserMethod.method, environment = VamtigerBrowserMethod.environment;
method.test = function (params) {
    if (params === void 0) { params = {}; }
    return "test method result from " + environment + ": params - \n" + JSON.stringify(params);
};
//# sourceMappingURL=test-method.js.map