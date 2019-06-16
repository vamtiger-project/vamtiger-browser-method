"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var load_script_1 = require("../load-script");
var parse = JSON.parse;
var src = 'vamtiger-browser-method.js.json.js';
var selector = "[data-name='vamtiger-browser-method.js.json']";
var name = 'vamtiger-browser-method.js';
exports.default = (function () { return describe('load vamtiger-browser-method', function () {
    it.skip('load json script', loadScriptTest);
    it.skip('load javascript', loadJavascriptTest);
    it('window.VamtigerBrowserMethod', vamtigerBrowserMethodTest);
}); });
function loadScriptTest() {
    var params = {
        src: src,
        name: src,
        transpileJs: true,
        removeFromDom: true
    };
    return load_script_1.default(params);
}
function loadJavascriptTest() {
    return new Promise(function (resolve, reject) {
        var script = document.querySelector(selector);
        var jsonText = script && script.innerHTML;
        var data = jsonText && parse(jsonText);
        var js = data && data.text;
        var params = js && {
            name: name,
            js: js
        };
        if (!params) {
            return reject(new Error('No params'));
        }
        return load_script_1.default(params).then(resolve);
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