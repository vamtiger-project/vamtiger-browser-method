"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var params = {
    type: types_1.ScriptType.js
};
var newline = types_1.StringConstant.newline;
function default_1() {
    var head = document.head;
    var createObjectURL = URL.createObjectURL;
    var workderScript = head.querySelector(types_1.Selector.vamtigerBrowserMethod);
    var workerDependecies = (Array.from(head.querySelectorAll(types_1.Selector.workderDependency)) || [])
        .map(function (_a) {
        var innerHTML = _a.innerHTML;
        return innerHTML;
    })
        .filter(function (script) { return script; });
    var workerScripts = workerDependecies.concat([
        workderScript && workderScript.innerHTML || ''
    ]).filter(function (script) { return script; }).join(newline.repeat(2));
    var workerBlob = workerScripts && workerScripts.length && new Blob([workerScripts], params);
    var workerUrl = workerBlob && createObjectURL && createObjectURL(workerBlob);
    return workerUrl;
}
exports.default = default_1;
//# sourceMappingURL=get-worker-url.js.map