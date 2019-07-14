"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (_a) {
    var _b = _a.milliseconds, milliseconds = _b === void 0 ? 1000 : _b;
    return new Promise(function (resolve, reject) { return setTimeout(resolve, milliseconds); });
});
//# sourceMappingURL=pause.js.map