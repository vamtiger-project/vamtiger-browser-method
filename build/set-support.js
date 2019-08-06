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
var is_worker_1 = require("./is-worker");
var send_message_1 = require("./send-message");
var get_indexed_db_data_1 = require("./get-indexed-db-data");
var save_support_1 = require("./save-support");
var get_cache_1 = require("./get-cache");
var keyPath = types_1.DbKeyPath.support;
var storeName = types_1.DbStoreName.support;
function default_1() {
    return __awaiter(this, void 0, void 0, function () {
        var VamtigerBrowserMethod, localStorage, indexedDB, _a, indexedDbIsAccessible, cache, support;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    VamtigerBrowserMethod = self.VamtigerBrowserMethod, localStorage = self.localStorage, indexedDB = self.indexedDB;
                    return [4 /*yield*/, Promise.all([
                            indexDbAccessible(),
                            get_cache_1.default()
                        ])];
                case 1:
                    _a = _b.sent(), indexedDbIsAccessible = _a[0], cache = _a[1];
                    support = {
                        cache: Boolean(cache),
                        localStorage: Boolean(localStorage),
                        indexedDb: Boolean(indexedDB),
                        indexedDbIsAccessible: indexedDbIsAccessible,
                        worker: self.hasOwnProperty('Worker'),
                        sharedWorker: self.hasOwnProperty('SharedWorker'),
                        textEncoder: self.hasOwnProperty('TextEncoder'),
                        textDecoder: self.hasOwnProperty('TextDecoder')
                    };
                    VamtigerBrowserMethod.support = support;
                    is_worker_1.default() && sendWorkerSupport();
                    return [2 /*return*/];
            }
        });
    });
}
exports.default = default_1;
function indexDbAccessible() {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var indexedDbIsAccessible, resolved, environment, timeout;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    indexedDbIsAccessible = false;
                    resolved = false;
                    environment = types_1.Environment.worker;
                    timeout = setTimeout(function () { return !resolved && resolve(indexedDbIsAccessible); }, types_1.TimeoutDuration.indexDbIsAccessible);
                    return [4 /*yield*/, get_indexed_db_data_1.default({
                            storeName: storeName,
                            keyPath: keyPath,
                            key: environment
                        })];
                case 1:
                    _a.sent();
                    indexedDbIsAccessible = true;
                    resolved = true;
                    resolve(indexedDbIsAccessible);
                    return [2 /*return*/];
            }
        });
    }); });
}
exports.indexDbAccessible = indexDbAccessible;
function setWorkerSupport(workerSupport) {
    return __awaiter(this, void 0, void 0, function () {
        var VamtigerBrowserMethod, support, environment;
        return __generator(this, function (_a) {
            VamtigerBrowserMethod = self.VamtigerBrowserMethod;
            support = VamtigerBrowserMethod.support, environment = VamtigerBrowserMethod.environment;
            VamtigerBrowserMethod.workerSupport = workerSupport;
            support && save_support_1.default(__assign({ environment: environment }, support));
            workerSupport && save_support_1.default(__assign({ environment: types_1.Environment.worker }, workerSupport));
            return [2 /*return*/];
        });
    });
}
exports.setWorkerSupport = setWorkerSupport;
function sendWorkerSupport() {
    var VamtigerBrowserMethod = self.VamtigerBrowserMethod;
    var message = {
        action: types_1.MessageAction.setWorkerSupport,
        params: VamtigerBrowserMethod.support || {}
    };
    send_message_1.default(message);
}
//# sourceMappingURL=set-support.js.map