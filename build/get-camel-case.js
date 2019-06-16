"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var nothing = types_1.StringConstant.nothing;
var nonWord = types_1.regex.nonWord;
exports.default = (function (input) { return input
    .split(nonWord)
    .map(function (word, index) { return !index && word.toLowerCase() || word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase(); })
    .join(nothing); });
//# sourceMappingURL=get-camel-case.js.map