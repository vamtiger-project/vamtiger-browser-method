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
var config_1 = require("./config");
var get_url_from_queue_1 = require("./get-url-from-queue");
var save_web_component_data_1 = require("./save-web-component-data");
function default_1(currentParams) {
    var detail = currentParams.detail;
    var actionName = detail.action, params = detail.params;
    var key = params.key;
    var url = get_url_from_queue_1.default({ url: key });
    var saveParams = config_1.handleJsonLdAction.has(actionName) && url && __assign({}, params, { url: url });
    saveParams && save_web_component_data_1.default(saveParams);
}
exports.default = default_1;
//# sourceMappingURL=handle-json-ld.js.map