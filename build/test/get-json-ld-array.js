"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var get_json_ld_array_1 = require("../get-json-ld-array");
var parse = JSON.parse;
var selector = '[data-name="https://vamtiger-project.github.io/vamtiger-mental-health-botswana-json-ld/build/vamtiger-mental-health-botswana-2018-json-ld.js"]';
exports.default = (function () { return describe('getJsonLdArray', function () {
    it('jsonLd arrray', function () {
        var head = document.head;
        var script = head.querySelector(selector);
        var jsonLd = script && parse(script.innerHTML);
        var jsonLdArray = jsonLd && get_json_ld_array_1.default({ jsonLd: jsonLd });
        chai_1.expect(jsonLdArray).to.be.ok;
    });
}); });
//# sourceMappingURL=get-json-ld-array.js.map