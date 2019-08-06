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
var save_web_component_data_1 = require("./save-web-component-data");
var is_window_1 = require("./is-window");
var get_json_ld_1 = require("./get-json-ld");
var remove_redundant_scripts_1 = require("./remove-redundant-scripts");
var parse = JSON.parse, stringify = JSON.stringify;
var emptyJsonLd = {
    jsonLd: [],
    json: {}
};
function default_1(params) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (is_window_1.default() && loadWebComponentData(params))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.default = default_1;
function loadWebComponentData(_a) {
    var url = _a.url, loadJsonJsonLd = _a.loadJsonJsonLd;
    return __awaiter(this, void 0, void 0, function () {
        var VamtigerBrowserMethod, _, has, get, set, worker, head, jsonLdSelector, _b, jsonLd, json, jsonJsonLdData, _c, params, jsonLdScript, removeScriptParams;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    VamtigerBrowserMethod = self.VamtigerBrowserMethod, _ = self._;
                    has = _.has, get = _.get, set = _.set;
                    worker = VamtigerBrowserMethod.worker;
                    head = document.head;
                    jsonLdSelector = "script[type=\"application/ld+json\"][data-json-ld=\"" + url + "\"]";
                    return [4 /*yield*/, getWebComponentData({ url: url })];
                case 1:
                    _b = _d.sent(), jsonLd = _b.jsonLd, json = _b.json;
                    _c = loadJsonJsonLd && json && Array.isArray(json.jsonLd);
                    if (!_c) return [3 /*break*/, 3];
                    return [4 /*yield*/, Promise.all(json.jsonLd.map(getJsonJsonLd))];
                case 2:
                    _c = (_d.sent());
                    _d.label = 3;
                case 3:
                    jsonJsonLdData = _c;
                    params = jsonLd && {
                        url: url,
                        created: new Date().getTime(),
                        jsonLd: jsonLd,
                        json: json
                    };
                    jsonLdScript = head.querySelector(jsonLdSelector);
                    removeScriptParams = {
                        selector: "[type=\"" + types_1.ScriptType.json + "\"][data-name=\"" + url + "\"]"
                    };
                    if (!jsonJsonLdData) return [3 /*break*/, 6];
                    jsonJsonLdData.forEach(function (currentJsonJsonLdData) { return currentJsonJsonLdData.forEach(function (_a) {
                        var index = _a.index, key = _a.key, data = _a.jsonLd;
                        if (jsonLd && Array.isArray(jsonLd) && has(jsonLd, index) && key && get(jsonLd, index)[key] === true && data) {
                            set(jsonLd, index + "." + [key], data);
                        }
                    }); });
                    if (!(jsonLdScript && jsonLd)) return [3 /*break*/, 6];
                    head.removeChild(jsonLdScript);
                    return [4 /*yield*/, Promise.all(jsonLd.map(function (currentJsonLd) { return load_script_1.default({
                            name: url,
                            json: stringify(currentJsonLd),
                            jsonld: true
                        }); }))];
                case 4:
                    _d.sent();
                    return [4 /*yield*/, remove_redundant_scripts_1.default(removeScriptParams)];
                case 5:
                    _d.sent();
                    _d.label = 6;
                case 6:
                    if (worker && params) {
                        save_web_component_data_1.default(params);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function getJsonJsonLd(_a) {
    var index = _a.index, fields = _a.fields;
    return __awaiter(this, void 0, void 0, function () {
        var keys, jsonJsonLd;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    keys = Object.keys(fields);
                    return [4 /*yield*/, Promise.all(keys.map(function (key) { return getFieldData({ key: key, urls: fields[key] }).then(function (fieldData) { return (__assign({ index: index }, fieldData)); }); }))];
                case 1:
                    jsonJsonLd = _b.sent();
                    return [2 /*return*/, jsonJsonLd];
            }
        });
    });
}
function getFieldData(_a) {
    var currentUrls = _a.urls, key = _a.key;
    return __awaiter(this, void 0, void 0, function () {
        var loadJsonJsonLd, urls, fieldData, data;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    loadJsonJsonLd = false;
                    urls = Array.isArray(currentUrls) && currentUrls.filter(function (url) { return typeof url === 'string'; }) || [];
                    return [4 /*yield*/, Promise.all(urls.map(function (url) { return get_json_ld_1.default({ jsonLd: url, loadJsonJsonLd: loadJsonJsonLd }); }))];
                case 1:
                    fieldData = _b.sent();
                    data = {
                        key: key,
                        jsonLd: []
                    };
                    fieldData.forEach(function (_a) {
                        var jsonLd = _a.jsonLd;
                        return jsonLd && jsonLd.forEach(function (currentJsonLd) { return currentJsonLd && data.jsonLd.push(currentJsonLd); });
                    });
                    return [2 /*return*/, data];
            }
        });
    });
}
function getWebComponentData(_a) {
    var url = _a.url;
    return __awaiter(this, void 0, void 0, function () {
        var head_1, selector, jsonLdSelector, jsonSelector, existingScript, script, _b, scripts, _c, _d, jsonLdScripts, jsonScript, jsonLd, json, webComponentData, error_1;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 5, , 6]);
                    head_1 = document.head;
                    selector = types_1.Selector.script + "[src=\"" + url + "\"]";
                    jsonLdSelector = "script[type=\"application/ld+json\"][data-json-ld=\"" + url + "\"]";
                    jsonSelector = "script[type=\"application/json\"][data-json-ld=\"" + url + "\"]";
                    existingScript = head_1.querySelector(selector);
                    _b = !existingScript;
                    if (!_b) return [3 /*break*/, 2];
                    return [4 /*yield*/, load_script_1.default({ src: url })];
                case 1:
                    _b = (_e.sent());
                    _e.label = 2;
                case 2:
                    script = _b;
                    _c = script;
                    if (!_c) return [3 /*break*/, 4];
                    return [4 /*yield*/, Promise.all([
                            Array
                                .from(head_1.querySelectorAll(jsonLdSelector))
                                .map(function (_a) {
                                var innerHTML = _a.innerHTML;
                                return innerHTML;
                            }),
                            head_1.querySelector(jsonSelector)
                        ])];
                case 3:
                    _c = (_e.sent());
                    _e.label = 4;
                case 4:
                    scripts = _c;
                    _d = scripts || [undefined, undefined], jsonLdScripts = _d[0], jsonScript = _d[1];
                    jsonLd = jsonLdScripts && jsonLdScripts.map(function (jsonLdScript) { return parse(jsonLdScript); });
                    json = jsonScript && parse(jsonScript.innerHTML) || {};
                    webComponentData = {
                        jsonLd: jsonLd,
                        json: json
                    };
                    return [2 /*return*/, webComponentData];
                case 5:
                    error_1 = _e.sent();
                    console.error(error_1);
                    return [2 /*return*/, emptyJsonLd];
                case 6: return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=load-web-component-data.js.map