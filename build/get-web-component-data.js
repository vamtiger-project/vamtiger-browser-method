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
var dequeue_1 = require("./dequeue");
var action = types_1.MessageAction.getWebComponentData;
var parse = JSON.parse;
function default_1(params) {
    var VamtigerBrowserMethod = self.VamtigerBrowserMethod;
    var support = VamtigerBrowserMethod.support, workerSupport = VamtigerBrowserMethod.workerSupport, worker = VamtigerBrowserMethod.worker;
    if (is_window_1.default()) {
        if (worker && workerSupport && workerSupport.indexedDbIsAccessible) {
            return getWebComponentDataWindowWorker(params);
        }
        else if (worker && support && support.indexedDbIsAccessible) {
            getWebComponentDataWindow(params);
        }
        else {
            getWebComponentDataHead(params);
        }
    }
    else if (is_worker_1.default()) {
        return getWebComponentDataWorker(params);
    }
}
exports.default = default_1;
function getWebComponentDataWindow(_a) {
    var key = _a.key;
    return __awaiter(this, void 0, void 0, function () {
        var VamtigerBrowserMethod, messageQueue, data, dequeueParams;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    VamtigerBrowserMethod = self.VamtigerBrowserMethod;
                    messageQueue = VamtigerBrowserMethod.messageQueue;
                    return [4 /*yield*/, getWebComponentData({ key: key })];
                case 1:
                    data = _b.sent();
                    dequeueParams = data && {
                        key: key,
                        data: data,
                        queue: messageQueue
                    };
                    if (dequeueParams) {
                        dequeue_1.default(dequeueParams);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.getWebComponentDataWindow = getWebComponentDataWindow;
function getWebComponentDataWindowWorker(_a) {
    var key = _a.key;
    return __awaiter(this, void 0, void 0, function () {
        var message;
        return __generator(this, function (_b) {
            message = {
                action: action,
                params: {
                    key: key
                }
            };
            send_message_1.default(message);
            return [2 /*return*/];
        });
    });
}
function getWebComponentDataWorker(_a) {
    var key = _a.key;
    return __awaiter(this, void 0, void 0, function () {
        var data, message;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, getWebComponentData({ key: key })];
                case 1:
                    data = _b.sent();
                    message = data && data.jsonLd && {
                        action: types_1.MessageAction.dequeue,
                        params: {
                            key: key,
                            data: {
                                jsonLd: data.jsonLd,
                                json: data.json
                            }
                        }
                    };
                    return [2 /*return*/, message];
            }
        });
    });
}
exports.getWebComponentDataWorker = getWebComponentDataWorker;
function getWebComponentData(_a) {
    var key = _a.key;
    return __awaiter(this, void 0, void 0, function () {
        var webComponentData;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, get_indexed_db_data_1.default({
                        storeName: types_1.DbStoreName.webComponent,
                        keyPath: types_1.DbKeyPath.webComponent,
                        key: key
                    })];
                case 1:
                    webComponentData = _b.sent();
                    return [2 /*return*/, webComponentData];
            }
        });
    });
}
exports.getWebComponentData = getWebComponentData;
function getWebComponentDataHead(_a) {
    var key = _a.key;
    var head = document.head;
    var VamtigerBrowserMethod = self.VamtigerBrowserMethod;
    var messageQueue = VamtigerBrowserMethod.messageQueue;
    var jsonLdSelector = "script[data-json-ld=\"" + key + "\"][type=\"" + types_1.ScriptType.jsonld + "\"]";
    var jsonSelector = "script[data-json-ld=\"" + key + "\"][type=\"" + types_1.ScriptType.json + "\"]";
    var jsonLdScripts = Array.from(head.querySelectorAll(jsonLdSelector));
    var jsonScript = head.querySelector(jsonSelector);
    var data = jsonLdScripts.length && {
        jsonLd: jsonLdScripts.map(function (_a) {
            var innerHTML = _a.innerHTML;
            return innerHTML && parse(innerHTML);
        }),
        json: jsonScript && jsonScript.innerHTML && parse(jsonScript.innerHTML) || {}
    };
    var dequeueParams = data && {
        key: key,
        data: data,
        queue: messageQueue
    };
    dequeueParams && dequeue_1.default(dequeueParams);
}
//# sourceMappingURL=get-web-component-data.js.map