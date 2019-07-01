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
var types_1 = require("./types");
var is_window_1 = require("./is-window");
var is_worker_1 = require("./is-worker");
var send_message_1 = require("./send-message");
var get_indexed_db_data_1 = require("./get-indexed-db-data");
var handle_load_script_1 = require("./handle-load-script");
var keyPath = types_1.DbKeyPath.customElementName;
var storeName = types_1.DbStoreName.customElementName;
var comma = types_1.StringConstant.comma, semiColon = types_1.StringConstant.semiColon, nothing = types_1.StringConstant.nothing;
var textModeElement = types_1.regex.textModeElement;
function default_1() {
    is_window_1.default() && getTextModeCssWindow();
    is_worker_1.default() && getTextModeCssWorker();
}
exports.default = default_1;
function getTextModeCssWindow() {
    var VamtigerBrowserMethod = self.VamtigerBrowserMethod;
    var support = VamtigerBrowserMethod.support, workerSupport = VamtigerBrowserMethod.workerSupport;
    var message = workerSupport && workerSupport.indexedDbIsAccessible && {
        action: types_1.MessageAction.getTextModeCss,
        params: {}
    };
    if (message) {
        send_message_1.default(message);
    }
    else {
        getTextModeCssFromMetaElement();
    }
}
function getTextModeCssWorker() {
    return __awaiter(this, void 0, void 0, function () {
        var customElementNames, names, css, message;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, get_indexed_db_data_1.default({
                        storeName: storeName,
                        keyPath: keyPath
                    })];
                case 1:
                    customElementNames = (_a.sent()) || [];
                    names = customElementNames.map(function (_a) {
                        var name = _a.name;
                        return name;
                    });
                    css = getCss(names);
                    message = css && {
                        action: types_1.MessageAction.loadScript,
                        params: {
                            name: types_1.ScriptName.textMode,
                            css: css,
                            removeExisting: true
                        }
                    };
                    message && send_message_1.default(message);
                    return [2 /*return*/];
            }
        });
    });
}
function getTextModeCssFromMetaElement() {
    var VamtigerBrowserMethod = self.VamtigerBrowserMethod;
    var metaElement = VamtigerBrowserMethod.metaElement;
    var customElementMetaElement = metaElement && metaElement.querySelector(types_1.Selector.customElementNameMetaElement);
    var names = customElementMetaElement && Array
        .from(customElementMetaElement.children)
        .map(function (_a) {
        var dataset = _a.dataset;
        return dataset.name || '';
    })
        .filter(function (name) { return name; })
        || [];
    var css = getCss(names);
    var params = css && {
        name: types_1.ScriptName.textMode,
        css: css,
        removeExisting: true
    };
    params && handle_load_script_1.default(params);
}
function getCss(names) {
    var selector = names
        .filter(function (name) { return !name.match(textModeElement); })
        .map(function (name) { return types_1.Selector.htmlTextMode + " " + name; })
        .join(comma);
    var cssBody = selector && [
        'display: none'
    ].join(semiColon);
    var css = selector && cssBody && [
        selector,
        '{',
        cssBody,
        '}'
    ].join(nothing);
    return css;
}
//# sourceMappingURL=get-text-mode-css.js.map