"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var types_1 = require("../types");
var load_script_1 = require("../load-script");
var src = 'vamtiger-browser-method.js.json.js';
exports.default = (function () { return describe('load vamtiger-browser-method', function () {
    it('load script', loadScriptTest);
    it('window.VamtigerBrowserMethod', vamtigerBrowserMethodTest);
}); });
function loadScriptTest() {
    return new Promise(function (resolve, reject) {
        addEventListener(types_1.EventName.vamtigerBrowserMethodReady, resolve);
        load_script_1.default({ name: src, src: src });
    });
}
function vamtigerBrowserMethodTest() {
    return new Promise(function (resolve, reject) {
        var VamtigerBrowserMethod = window.VamtigerBrowserMethod;
        chai_1.expect(VamtigerBrowserMethod).to.be.ok;
        resolve();
    });
}
//# sourceMappingURL=load-vamtiger-browser-method.js.map