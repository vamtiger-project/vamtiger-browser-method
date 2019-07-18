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
var load_script_1 = require("./load-script");
var is_window_1 = require("./is-window");
var is_worker_1 = require("./is-worker");
var send_message_1 = require("./send-message");
var queue_1 = require("./queue");
var get_cache_1 = require("./get-cache");
var requestIdleCallback = self.requestIdleCallback;
var nothing = types_1.StringConstant.nothing, slash = types_1.StringConstant.slash;
var blobParams = {
    type: types_1.ScriptType.js
};
function default_1(params) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    if (is_window_1.default()) {
                        if (requestIdleCallback) {
                            requestIdleCallback(function () { return loadMethodWindow(__assign({}, params, { resolve: resolve, reject: reject })); });
                        }
                        else {
                            setTimeout(function () { return loadMethodWindow(__assign({}, params, { resolve: resolve, reject: reject })); }, 0);
                        }
                    }
                    else if (is_worker_1.default()) {
                        loadMethodWorker(params)
                            .then(resolve)
                            .catch(reject);
                    }
                })];
        });
    });
}
exports.default = default_1;
function loadMethodWindow(_a) {
    var relativeUrl = _a.relativeUrl, name = _a.name, resolve = _a.resolve, reject = _a.reject;
    return __awaiter(this, void 0, void 0, function () {
        var scriptLoadError, origin, src, VamtigerBrowserMethod, _, worker, workerSupport, get, script, method, message, queueParams;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    scriptLoadError = undefined;
                    origin = location.origin;
                    src = [
                        origin,
                        relativeUrl
                    ].join(slash);
                    VamtigerBrowserMethod = self.VamtigerBrowserMethod, _ = self._;
                    worker = VamtigerBrowserMethod.worker, workerSupport = VamtigerBrowserMethod.workerSupport;
                    get = _.get;
                    return [4 /*yield*/, load_script_1.default({ src: src }).catch(function (error) { return scriptLoadError = error; })];
                case 1:
                    script = _b.sent();
                    method = get(VamtigerBrowserMethod.method, name);
                    message = workerSupport && workerSupport.cache && worker && typeof method === 'function' && {
                        action: types_1.MessageAction.loadMethod,
                        params: { relativeUrl: src, name: name }
                    };
                    queueParams = message && {
                        key: src,
                        resolve: resolve,
                        reject: reject
                    };
                    if (script) {
                        script.dataset.vamtigerBrowserMethodLoadedMethod = name;
                    }
                    if (scriptLoadError) {
                        reject(scriptLoadError);
                    }
                    else if (!method) {
                        reject(new Error(types_1.ErrorMessage.scriptLoadedButMethodNameNotFound + " - " + name));
                    }
                    else if (queueParams && message) {
                        queue_1.default(queueParams);
                        send_message_1.default(message);
                    }
                    else {
                        resolve();
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function loadMethodWorker(_a) {
    var src = _a.relativeUrl, name = _a.name;
    return __awaiter(this, void 0, void 0, function () {
        var VamtigerBrowserMethod, importScripts, createObjectURL, method, cache, _b, request, response, _c, code, _d, blob, url, importMethod, _e, message, removeRedundantMethodMessage;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    VamtigerBrowserMethod = self.VamtigerBrowserMethod, importScripts = self.importScripts;
                    createObjectURL = URL.createObjectURL;
                    method = VamtigerBrowserMethod.method;
                    _b = !method.hasOwnProperty(name);
                    if (!_b) return [3 /*break*/, 2];
                    return [4 /*yield*/, get_cache_1.default()];
                case 1:
                    _b = (_f.sent());
                    _f.label = 2;
                case 2:
                    cache = _b;
                    request = cache && new Request(src);
                    _c = cache && request;
                    if (!_c) return [3 /*break*/, 4];
                    return [4 /*yield*/, cache.match(request)];
                case 3:
                    _c = (_f.sent());
                    _f.label = 4;
                case 4:
                    response = _c;
                    _d = response;
                    if (!_d) return [3 /*break*/, 6];
                    return [4 /*yield*/, response.text()];
                case 5:
                    _d = (_f.sent());
                    _f.label = 6;
                case 6:
                    code = _d;
                    blob = code && new Blob([code], blobParams);
                    url = blob && createObjectURL(blob);
                    _e = url && importScripts;
                    if (!_e) return [3 /*break*/, 8];
                    return [4 /*yield*/, importScripts(url)];
                case 7:
                    _e = (_f.sent());
                    _f.label = 8;
                case 8:
                    importMethod = _e;
                    message = {
                        action: types_1.MessageAction.dequeue,
                        params: {
                            key: src,
                            data: {}
                        }
                    };
                    removeRedundantMethodMessage = method.hasOwnProperty(name) && {
                        action: types_1.MessageAction.updateMethod,
                        params: { name: name }
                    };
                    removeRedundantMethodMessage && send_message_1.default(removeRedundantMethodMessage);
                    return [2 /*return*/, message];
            }
        });
    });
}
//# sourceMappingURL=load-method.js.map