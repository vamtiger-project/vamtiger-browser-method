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
var save_indexed_db_data_1 = require("./save-indexed-db-data");
var send_message_1 = require("./send-message");
var get_web_component_data_1 = require("./get-web-component-data");
var remove_redundant_scripts_1 = require("./remove-redundant-scripts");
var storeName = types_1.DbStoreName.webComponent;
var keyPath = types_1.DbKeyPath.webComponent;
function default_1(params) {
    if (is_window_1.default()) {
        return saveWebComponentDataWindow(params);
    }
    else if (is_worker_1.default()) {
        return saveWebComponentDataWorker(params);
    }
}
exports.default = default_1;
function saveWebComponentDataWindow(params) {
    return __awaiter(this, void 0, void 0, function () {
        var VamtigerBrowserMethod, support, workerSupport, key, selector, data, message;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    VamtigerBrowserMethod = self.VamtigerBrowserMethod;
                    support = VamtigerBrowserMethod.support, workerSupport = VamtigerBrowserMethod.workerSupport;
                    key = params.url;
                    selector = getSelector({ url: key });
                    data = getData(params);
                    message = data && {
                        action: types_1.MessageAction.saveWebComponentData,
                        params: data
                    };
                    if (!(workerSupport && workerSupport.indexedDbIsAccessible)) return [3 /*break*/, 1];
                    message && send_message_1.default(message);
                    return [3 /*break*/, 4];
                case 1:
                    if (!(support && support.indexedDbIsAccessible)) return [3 /*break*/, 4];
                    return [4 /*yield*/, saveWebComponentDataIndexDb(params)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, get_web_component_data_1.default({ key: key })];
                case 3:
                    _a.sent();
                    remove_redundant_scripts_1.default({ selector: selector });
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
function saveWebComponentDataWorker(params) {
    return __awaiter(this, void 0, void 0, function () {
        var url, selector, saveData, getWebComponentDataMessage, removeRedundantScriptsMessage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = params.url;
                    selector = getSelector({ url: url });
                    return [4 /*yield*/, saveWebComponentDataIndexDb(params)];
                case 1:
                    saveData = _a.sent();
                    getWebComponentDataMessage = {
                        action: types_1.MessageAction.getWebComponentData,
                        params: {
                            key: url
                        }
                    };
                    removeRedundantScriptsMessage = {
                        action: types_1.MessageAction.removeRedundantScripts,
                        params: {
                            selector: selector
                        }
                    };
                    send_message_1.default(getWebComponentDataMessage);
                    send_message_1.default(removeRedundantScriptsMessage);
                    return [2 /*return*/];
            }
        });
    });
}
function saveWebComponentDataIndexDb(params) {
    return __awaiter(this, void 0, void 0, function () {
        var data, saveParams, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    data = getData(params);
                    saveParams = data && {
                        storeName: storeName,
                        keyPath: keyPath,
                        data: data
                    };
                    _a = saveParams;
                    if (!_a) return [3 /*break*/, 2];
                    return [4 /*yield*/, save_indexed_db_data_1.default(saveParams)];
                case 1:
                    _a = (_b.sent());
                    _b.label = 2;
                case 2:
                    _a;
                    return [2 /*return*/];
            }
        });
    });
}
function getData(_a) {
    var url = _a.url, _b = _a.created, created = _b === void 0 ? new Date().getTime() : _b, json = _a.json, jsonLd = _a.jsonLd;
    var data = url && jsonLd && {
        url: url,
        created: created,
        jsonLd: jsonLd,
        json: json
    };
    return data;
}
function getSelector(_a) {
    var url = _a.url;
    var selector = "script[type=\"application/json\"][data-json-ld=\"" + url + "\"]";
    return selector;
}
//# sourceMappingURL=save-web-component-data.js.map