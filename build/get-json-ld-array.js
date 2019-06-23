"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var config_1 = require("./config");
var get_start_case_1 = require("./get-start-case");
var nothing = types_1.StringConstant.nothing;
var leadingAt = types_1.regex.leadingAt;
function getJsonLdArray(_a) {
    var jsonLd = _a.jsonLd;
    var keys = Object.keys(jsonLd);
    var entries = keys.map(function (key) { return getEntry({ key: key, value: jsonLd[key] }); });
    var jsonLdArray = [];
    entries.forEach(function (entries) { return entries.forEach(function (entry) { return jsonLdArray.push(entry); }); });
    return jsonLdArray;
}
exports.default = getJsonLdArray;
function getEntry(_a) {
    var key = _a.key, value = _a.value;
    var entryValue = config_1.jsonLdEntryValueType.has(typeof value) && value;
    var valueArray = Array.isArray(value) && value || typeof value === 'object' && [value];
    var nestedEntries = valueArray && valueArray.map(function (jsonLd) { return getJsonLdArray({ jsonLd: jsonLd }); });
    var entry = [[get_start_case_1.default({ input: key.replace(leadingAt, nothing), from: 'camelCase' }), entryValue ? entryValue.toString().trim() : nothing]];
    nestedEntries && nestedEntries.forEach(function (nestedEntry) { return nestedEntry.forEach(function (currentNestedEntry) { return entry.push(currentNestedEntry); }); });
    return entry;
}
//# sourceMappingURL=get-json-ld-array.js.map