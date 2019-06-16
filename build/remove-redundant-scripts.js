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
var is_json_script_1 = require("./is-json-script");
var requestIdleCallback = self.requestIdleCallback;
var dash = types_1.StringConstant.dash;
var prefix = types_1.Prefix.vamtigerBrowserMethod;
function default_1(params) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = is_window_1.default();
                    if (!_a) return [3 /*break*/, 2];
                    return [4 /*yield*/, removeRedundantScripts(params)];
                case 1:
                    _a = (_b.sent());
                    _b.label = 2;
                case 2:
                    _a;
                    is_worker_1.default() && sendRemoveRedundantScriptsMessage(params);
                    return [2 /*return*/];
            }
        });
    });
}
exports.default = default_1;
function removeRedundantScripts(params) {
    return __awaiter(this, void 0, void 0, function () {
        var parent;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    parent = document.head;
                    return [4 /*yield*/, removeScripts(__assign({}, params, { parent: parent }))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function removeScripts(params) {
    return new Promise(function (resolve, reject) {
        if (requestIdleCallback) {
            requestIdleCallback(function () { return removeScriptsFromParent(__assign({}, params, { resolve: resolve, reject: reject })); });
        }
        else {
            removeScriptsFromParent(__assign({}, params, { resolve: resolve, reject: reject }));
        }
    });
}
exports.removeScripts = removeScripts;
function removeDuplicateScripts(params) {
    return new Promise(function (resolve, reject) {
        if (requestIdleCallback) {
            requestIdleCallback(function () { return removeDuplicateScriptsFromParent(__assign({}, params, { resolve: resolve, reject: reject })); });
        }
        else {
            removeDuplicateScriptsFromParent(__assign({}, params, { resolve: resolve, reject: reject }));
        }
    });
}
exports.removeDuplicateScripts = removeDuplicateScripts;
function removeDuplicateScriptsFromParent(_a) {
    var resolve = _a.resolve, reject = _a.reject, selector = _a.selector, parent = _a.parent;
    var duplicateScripts = Array.from(parent.querySelectorAll(selector));
    duplicateScripts.pop();
    duplicateScripts.forEach(function (duplicateScript) { return parent.removeChild(duplicateScript); });
    resolve && resolve();
}
function removeScriptsFromParent(_a) {
    var selector = _a.selector, parent = _a.parent, resolve = _a.resolve, reject = _a.reject;
    var head = document.head;
    var scripts = Array.from(parent.querySelectorAll(selector));
    var jsScripts = scripts.filter(function (_a) {
        var type = _a.type, src = _a.src;
        return src || !type || type === types_1.ScriptType.js;
    });
    var jsonScripts = scripts
        .filter(function (_a) {
        var type = _a.type;
        return type === types_1.ScriptType.json;
    })
        .filter(function (script) { return is_json_script_1.default({ script: script }); });
    var jsonLdScripts = scripts
        .filter(function (_a) {
        var type = _a.type;
        return type === types_1.ScriptType.jsonld;
    })
        .filter(function (script) { return is_json_script_1.default({ script: script }); });
    var safeScripts = jsonLdScripts.concat(jsonScripts);
    var time = new Date().getTime();
    var jsonScriptName = jsonScripts.length && [
        prefix,
        types_1.ScriptType.json,
        time
    ].join(dash);
    var jsonScriptSelector = jsonScriptName && "script[type=\"" + types_1.ScriptType.json + "\"][data-name=\"" + jsonScriptName + "\"]";
    var jsonLdScriptName = jsonLdScripts.length && [
        prefix,
        types_1.ScriptType.jsonld,
        time
    ].join(dash);
    var jsonLdScriptSelector = jsonLdScriptName && "script[type=\"" + types_1.ScriptType.jsonld + "\"][data-name=\"" + jsonLdScriptName + "\"]";
    jsScripts.length && jsonScriptName && jsScripts.forEach(function (_a) {
        var dataset = _a.dataset;
        return dataset.name = jsonScriptName || '';
    });
    jsonLdScripts.length && jsonLdScriptName && jsonLdScriptSelector && jsonLdScripts.forEach(function (_a) {
        var dataset = _a.dataset;
        return dataset.name = jsonLdScriptName || '';
    });
    if (jsonScriptSelector && parent !== head) {
        parent.dataset.json = jsonScriptSelector;
    }
    if (jsonLdScriptSelector && parent !== head) {
        parent.dataset.jsonLd = jsonLdScriptSelector;
    }
    if (scripts.length) {
        parent.dataset.removedScripts = scripts.length.toString();
    }
    safeScripts.forEach(function (script) { return head.appendChild(script); });
    scripts.forEach(function (script) { return parent.removeChild(script); });
    resolve && resolve();
}
function sendRemoveRedundantScriptsMessage(_a) {
    var selector = _a.selector;
    var massage = {
        action: types_1.MessageAction.removeRedundantScripts,
        params: {
            selector: selector
        }
    };
    send_message_1.default(massage);
}
exports.sendRemoveRedundantScriptsMessage = sendRemoveRedundantScriptsMessage;
//# sourceMappingURL=remove-redundant-scripts.js.map