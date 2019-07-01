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
var save_indexed_db_data_1 = require("./save-indexed-db-data");
var get_text_mode_css_1 = require("./get-text-mode-css");
var keyPath = types_1.DbKeyPath.customElementName;
var storeName = types_1.DbStoreName.customElementName;
function default_1(params) {
    is_window_1.default() && saveCustomElementNameWindow(params);
    is_worker_1.default() && saveCustomElementNameWorker(params);
}
exports.default = default_1;
function saveCustomElementNameWindow(params) {
    var VamtigerBrowserMethod = self.VamtigerBrowserMethod;
    var support = VamtigerBrowserMethod.support, workerSupport = VamtigerBrowserMethod.workerSupport;
    var message = workerSupport && workerSupport.indexedDbIsAccessible && {
        action: types_1.MessageAction.saveCustomElementName,
        params: params
    };
    if (message) {
        send_message_1.default(message);
    }
    else if (support && support.indexedDbIsAccessible) {
        saveCustomElementNameWindowIndexDb(params);
    }
    else {
        saveCustomeElementNameDocument(params);
    }
}
function saveCustomElementNameWorker(params) {
    saveCustomElementNameIndexDb(params);
}
function saveCustomElementNameIndexDb(params) {
    var name = params.name;
    var saveParams = name && {
        storeName: storeName,
        keyPath: keyPath,
        data: __assign({ name: name }, params),
        successAction: types_1.MessageAction.getTextModeCss
    };
    saveParams && save_indexed_db_data_1.default(saveParams);
}
function saveCustomElementNameWindowIndexDb(params) {
    return __awaiter(this, void 0, void 0, function () {
        var name, saveParams, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    name = params.name;
                    saveParams = name && {
                        storeName: storeName,
                        keyPath: keyPath,
                        data: __assign({ name: name }, params)
                    };
                    _a = saveParams;
                    if (!_a) return [3 /*break*/, 2];
                    return [4 /*yield*/, save_indexed_db_data_1.default(saveParams)];
                case 1:
                    _a = (_b.sent());
                    _b.label = 2;
                case 2:
                    _a;
                    get_text_mode_css_1.default();
                    return [2 /*return*/];
            }
        });
    });
}
function saveCustomeElementNameDocument(_a) {
    var name = _a.name;
    var VamtigerBrowserMethod = self.VamtigerBrowserMethod;
    var metaElement = VamtigerBrowserMethod.metaElement;
    var customElementMetaElement = metaElement && metaElement.querySelector(types_1.Selector.customElementNameMetaElement);
    var selector = customElementMetaElement && "meta[data-name=\"" + name + "\"]";
    var existingMetaElement = selector && customElementMetaElement && customElementMetaElement.querySelector(selector);
    var newMetaElement = !existingMetaElement && document.createElement('meta');
    if (customElementMetaElement && newMetaElement) {
        newMetaElement.dataset.name = name;
        customElementMetaElement.appendChild(newMetaElement);
        get_text_mode_css_1.default();
    }
}
//# sourceMappingURL=save-custom-element-name.js.map