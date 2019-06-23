"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var nothing = types_1.StringConstant.nothing;
var nonWord = types_1.regex.nonWord;
var getCamelCase = {
    kebabCase: kebabCase
};
function default_1(_a) {
    var input = _a.input, from = _a.from;
    var camelCase = getCamelCase[from]({ input: input, from: from });
    return camelCase;
}
exports.default = default_1;
function kebabCase(_a) {
    var input = _a.input;
    var camelCase = input
        .split(nonWord)
        .map(function (word, index) { return !index && word.toLowerCase() || word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase(); })
        .join(nothing);
    return camelCase;
}
//# sourceMappingURL=get-camel-case.js.map