"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var failedToLoadScript = types_1.ErrorMessage.failedToLoadScript;
exports.default = (function (_a) {
    var src = _a.src;
    return new Promise(function (resolve, reject) {
        var head = document.head, body = document.body;
        var selector = "script[src=\"" + src + "\"]";
        var existingScript = head.querySelector(selector) || body.querySelector(selector);
        var script = (!existingScript && document.createElement('script'));
        if (script) {
            script.src = src;
            script.addEventListener('load', handleLoad);
            script.addEventListener('error', handleLoadError);
            head.appendChild(script);
        }
        else if (existingScript) {
            resolve(existingScript);
        }
        function handleLoad(event) {
            script.removeEventListener('load', handleLoad);
            resolve(script);
        }
        function handleLoadError(event) {
            script.removeEventListener('error', handleLoadError);
            reject(new Error(failedToLoadScript + ": " + script.src));
        }
    });
});
//# sourceMappingURL=load-script.js.map