"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var types_1 = require("./types");
var get_message_data_1 = require("./get-message-data");
var remove_redundant_scripts_1 = require("./remove-redundant-scripts");
var set_support_1 = require("./set-support");
var save_web_component_data_1 = require("./save-web-component-data");
var send_message_1 = require("./send-message");
var ignore_message_1 = require("./ignore-message");
var get_web_component_data_1 = require("./get-web-component-data");
var dequeue_1 = require("./dequeue");
var load_web_component_data_1 = require("./load-web-component-data");
var save_support_1 = require("./save-support");
var save_custom_element_name_1 = require("./save-custom-element-name");
var get_text_mode_css_1 = require("./get-text-mode-css");
var handle_load_script_1 = require("./handle-load-script");
var load_method_1 = require("./load-method");
var update_method_1 = require("./update-method");
var get_method_result_1 = require("./get-method-result");
var import_dependencies_1 = require("./import-dependencies");
var remove_dependency_url_1 = require("./remove-dependency-url");
var action = (_a = {},
    _a[types_1.MessageAction.ignore] = ignore_message_1.default,
    _a[types_1.MessageAction.removeRedundantScripts] = remove_redundant_scripts_1.default,
    _a[types_1.MessageAction.setWorkerSupport] = set_support_1.setWorkerSupport,
    _a[types_1.MessageAction.saveWebComponentData] = save_web_component_data_1.default,
    _a[types_1.MessageAction.getWebComponentData] = get_web_component_data_1.default,
    _a[types_1.MessageAction.dequeue] = dequeue_1.default,
    _a[types_1.MessageAction.loadWebComponentData] = load_web_component_data_1.default,
    _a[types_1.MessageAction.saveSupport] = save_support_1.default,
    _a[types_1.MessageAction.saveCustomElementName] = save_custom_element_name_1.default,
    _a[types_1.MessageAction.getTextModeCss] = get_text_mode_css_1.default,
    _a[types_1.MessageAction.loadScript] = handle_load_script_1.default,
    _a[types_1.MessageAction.loadMethod] = load_method_1.default,
    _a[types_1.MessageAction.updateMethod] = update_method_1.default,
    _a[types_1.MessageAction.getMethodResult] = get_method_result_1.default,
    _a[types_1.MessageAction.importDependencies] = import_dependencies_1.default,
    _a[types_1.MessageAction.removeDependencyUrl] = remove_dependency_url_1.default,
    _a);
function default_1(event) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, actionName, params, currentAction, response;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = get_message_data_1.default(event) || { action: types_1.MessageAction.ignore, params: {} }, actionName = _a.action, params = _a.params;
                    currentAction = action[actionName];
                    return [4 /*yield*/, currentAction(params)];
                case 1:
                    response = _b.sent();
                    response && send_message_1.default(response);
                    return [2 /*return*/];
            }
        });
    });
}
exports.default = default_1;
//# sourceMappingURL=handle-message.js.map