"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var slash = types_1.StringConstant.slash;
exports.babel = {
    presets: ['es2015']
};
exports.jsonLdEntryValueType = new Set([
    typeof 1,
    typeof '',
    typeof true
]);
exports.dependencyPaths = Array.from(new Set([
    'lodash/lodash.min.js'
]));
exports.getDependencies = function () { return [
    !self._ && types_1.Dependency.lodash || ''
].filter(function (dependency) { return dependency; }); };
//# sourceMappingURL=config.js.map