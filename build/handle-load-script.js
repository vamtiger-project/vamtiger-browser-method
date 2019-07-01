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
var load_script_1 = require("./load-script");
var is_window_1 = require("./is-window");
var is_text_mode_1 = require("./is-text-mode");
function default_1(params) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    var requestIdleCallback = self.requestIdleCallback;
                    if (requestIdleCallback) {
                        requestIdleCallback(function () { return is_window_1.default() && loadScriptWindow(params).then(resolve).catch(reject); });
                    }
                    else {
                        setTimeout(function () { return is_window_1.default() && loadScriptWindow(params).then(resolve).catch(reject); }, 0);
                    }
                })];
        });
    });
}
exports.default = default_1;
function loadScriptWindow(params) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    var head, _a, name, removeExisting, selector, existingScript, ignore, _b, error_1;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                head = document.head;
                                _a = params, name = _a.name, removeExisting = _a.removeExisting;
                                selector = name && removeExisting && "[data-name=\"" + name + "\"]";
                                existingScript = selector && head.querySelector(selector);
                                ignore = !is_text_mode_1.default() && existingScript && existingScript.innerHTML === (params.css || params.js);
                                _c.label = 1;
                            case 1:
                                _c.trys.push([1, 4, , 5]);
                                _b = !ignore;
                                if (!_b) return [3 /*break*/, 3];
                                return [4 /*yield*/, load_script_1.default(params)];
                            case 2:
                                _b = (_c.sent());
                                _c.label = 3;
                            case 3:
                                _b;
                                resolve();
                                return [3 /*break*/, 5];
                            case 4:
                                error_1 = _c.sent();
                                reject(error_1);
                                return [3 /*break*/, 5];
                            case 5: return [2 /*return*/];
                        }
                    });
                }); })];
        });
    });
}
//# sourceMappingURL=handle-load-script.js.map