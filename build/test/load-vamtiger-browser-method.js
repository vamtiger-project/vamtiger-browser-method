"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var parse = JSON.parse;
var src = 'vamtiger-browser-method.js.json.js';
var selector = "[data-name='vamtiger-browser-method.js.json']";
var name = 'vamtiger-browser-method.js';
exports.default = (function () { return describe('load vamtiger-browser-method', function () {
    it('window.VamtigerBrowserMethod', vamtigerBrowserMethodTest);
}); });
function vamtigerBrowserMethodTest() {
    return new Promise(function (resolve, reject) {
        var VamtigerBrowserMethod = window.VamtigerBrowserMethod;
        chai_1.expect(VamtigerBrowserMethod).to.be.ok;
        resolve();
    });
}
//# sourceMappingURL=load-vamtiger-browser-method.js.map