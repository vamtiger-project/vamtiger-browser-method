"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var get_json_ld_1 = require("./get-json-ld");
var noJsonLdParameter = types_1.ErrorMessage.noJsonLdParameter;
function default_1(_a) {
    var jsonLd = _a.jsonLd;
    return new Promise(function (resolve, reject) {
        var requestIdleCallback = self.requestIdleCallback;
        if (jsonLd) {
            if (requestIdleCallback) {
                requestIdleCallback(function () { return get_json_ld_1.default({ jsonLd: jsonLd }).then(resolve); });
            }
            else {
                get_json_ld_1.default({ jsonLd: jsonLd }).then(resolve);
            }
        }
        else {
            reject(new Error(noJsonLdParameter));
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=get-data.js.map