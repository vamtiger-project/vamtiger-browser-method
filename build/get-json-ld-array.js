"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var nothing = types_1.StringConstant.nothing;
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
    var valueString = typeof value === 'string' && value;
    var valueArray = Array.isArray(value) && value || typeof value === 'object' && [value];
    var nestedEntries = valueArray && valueArray.map(function (jsonLd) { return getJsonLdArray({ jsonLd: jsonLd }); });
    var entry = [[key, valueString ? valueString.toString().trim() : nothing]];
    nestedEntries && nestedEntries.forEach(function (nestedEntry) { return nestedEntry.forEach(function (currentNestedEntry) { return entry.push(currentNestedEntry); }); });
    return entry;
}
//# sourceMappingURL=get-json-ld-array.js.map