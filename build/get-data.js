"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var get_json_ld_1 = require("./get-json-ld");
var view_json_ld_1 = require("./view-json-ld");
var noJsonLdParameter = types_1.ErrorMessage.noJsonLdParameter;
function default_1(params) {
    return new Promise(function (resolve, reject) {
        var requestIdleCallback = self.requestIdleCallback;
        var textMode = params.textMode, jsonLd = params.jsonLd;
        if (jsonLd) {
            if (textMode) {
                view_json_ld_1.default(params);
            }
            if (requestIdleCallback) {
                requestIdleCallback(function () { return get_json_ld_1.default(params).then(resolve); });
            }
            else {
                setTimeout(function () { return get_json_ld_1.default(params).then(resolve); }, 0);
            }
        }
        else {
            reject(new Error(noJsonLdParameter));
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=get-data.js.map