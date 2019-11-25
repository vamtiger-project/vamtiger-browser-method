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
var config_1 = require("./config");
var get_tab_link_1 = require("./get-tab-link");
var get_email_link_1 = require("./get-email-link");
var requestIdleCallback = self.requestIdleCallback;
var nothing = types_1.StringConstant.nothing, slash = types_1.StringConstant.slash;
var leadingAt = types_1.regex.leadingAt, remoteUrl = types_1.regex.remoteUrl, email = types_1.regex.email;
function default_1(params) {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (requestIdleCallback) {
                requestIdleCallback(function () { return getJsonLdArray(params).then(resolve).catch(reject); });
            }
            else {
                setTimeout(function () { return getJsonLdArray(params).then(resolve).catch(reject); }, 0);
            }
            return [2 /*return*/];
        });
    }); });
}
exports.default = default_1;
function getJsonLdArray(_a) {
    var currentJsonLd = _a.jsonLd;
    return __awaiter(this, void 0, void 0, function () {
        var jsonLd, keys, entries, jsonLdArray;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    jsonLd = getJsonLd({
                        jsonLd: currentJsonLd
                    });
                    keys = Object.keys(jsonLd);
                    return [4 /*yield*/, Promise.all(keys.map(function (key) { return getEntry({ key: key, value: jsonLd[key] }); }))];
                case 1:
                    entries = _b.sent();
                    jsonLdArray = [];
                    entries.forEach(function (entries) { return entries.forEach(function (entry) { return jsonLdArray.push(entry); }); });
                    return [2 /*return*/, jsonLdArray];
            }
        });
    });
}
exports.getJsonLdArray = getJsonLdArray;
function getJsonLd(_a) {
    var jsonLd = _a.jsonLd;
    var _ = self._;
    var startCase = _.startCase;
    var _b = jsonLd["@context"], context = _b === void 0 ? undefined : _b, _c = jsonLd["@type"], type = _c === void 0 ? undefined : _c;
    var typeLinkHref = context && type && [
        context,
        type
    ].join(slash);
    var typeLinkText = type && startCase(type);
    var typeLink = get_tab_link_1.default({
        href: typeLinkHref,
        text: typeLinkText
    });
    if (typeLink) {
        jsonLd['@type'] = typeLink;
    }
    return jsonLd;
}
function getEntry(_a) {
    var key = _a.key, value = _a.value;
    return __awaiter(this, void 0, void 0, function () {
        var _, startCase, entryValue, valueArray, nestedEntries, _b, entry;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _ = self._;
                    startCase = _.startCase;
                    entryValue = config_1.jsonLdEntryValueType.has(typeof value) && value;
                    valueArray = Array.isArray(value) && value || typeof value === 'object' && [value];
                    _b = valueArray;
                    if (!_b) return [3 /*break*/, 2];
                    return [4 /*yield*/, Promise.all(valueArray.map(function (jsonLd) { return getJsonLdArray({ jsonLd: jsonLd }); }))];
                case 1:
                    _b = (_c.sent());
                    _c.label = 2;
                case 2:
                    nestedEntries = _b;
                    entry = [[startCase(key.replace(leadingAt, nothing)), entryValue && (key.match(email) && get_email_link_1.default({ href: entryValue.toString(), text: entryValue.toString() }) || getEntryValue(entryValue)) || nothing]];
                    nestedEntries && nestedEntries.forEach(function (nestedEntry) { return nestedEntry.forEach(function (currentNestedEntry) { return entry.push(currentNestedEntry); }); });
                    return [2 /*return*/, entry];
            }
        });
    });
}
function getEntryValue(value) {
    var valueString = value.toString().trim();
    var linkHref = valueString.match(remoteUrl) && valueString;
    var linkText = linkHref && valueString && valueString.split(slash).pop();
    var link = linkHref && linkText && get_tab_link_1.default({
        href: linkHref,
        text: linkText
    });
    var entryValue = link || valueString;
    return entryValue;
}
//# sourceMappingURL=get-json-ld-array.js.map