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
var queue_1 = require("./queue");
var send_message_1 = require("./send-message");
var get_message_id_1 = require("./get-message-id");
var requestIdleCallback = self.requestIdleCallback;
function default_1(params) {
    return new Promise(function (resolve, reject) {
        if (is_window_1.default()) {
            if (requestIdleCallback) {
                requestIdleCallback(function () { return getMethodResultWindow(__assign({}, params, { resolve: resolve, reject: reject })); });
            }
            else {
                setTimeout(function () { return getMethodResultWindow(__assign({}, params, { resolve: resolve, reject: reject })); }, 0);
            }
        }
        else if (is_worker_1.default()) {
            getMethodResultWorker(params)
                .then(resolve)
                .then(reject);
        }
    });
}
exports.default = default_1;
function getMethodResultWindow(_a) {
    var _b = _a.messageId, messageId = _b === void 0 ? get_message_id_1.default() : _b, name = _a.name, params = _a.params, resolve = _a.resolve, reject = _a.reject;
    return __awaiter(this, void 0, void 0, function () {
        var queueParams, message;
        return __generator(this, function (_c) {
            queueParams = {
                key: messageId,
                resolve: resolve,
                reject: reject
            };
            message = {
                action: types_1.MessageAction.getMethodResult,
                params: {
                    name: name,
                    params: params,
                    messageId: messageId
                }
            };
            queue_1.default(queueParams);
            send_message_1.default(message);
            return [2 /*return*/];
        });
    });
}
function getMethodResultWorker(_a) {
    var _b = _a.messageId, key = _b === void 0 ? '' : _b, name = _a.name, params = _a.params;
    return __awaiter(this, void 0, void 0, function () {
        var VamtigerBrowserMethod, method, namedMethod, result, _c, message;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    VamtigerBrowserMethod = self.VamtigerBrowserMethod;
                    method = VamtigerBrowserMethod.method;
                    namedMethod = method[name];
                    if (!namedMethod) return [3 /*break*/, 2];
                    return [4 /*yield*/, namedMethod(params)];
                case 1:
                    _c = _d.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _c = "No method named '" + name + "'";
                    _d.label = 3;
                case 3:
                    result = _c;
                    message = {
                        action: types_1.MessageAction.dequeue,
                        params: {
                            key: key,
                            data: result
                        }
                    };
                    return [2 /*return*/, message];
            }
        });
    });
}
//# sourceMappingURL=get-method-result.js.map