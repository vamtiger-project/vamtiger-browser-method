"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var types_1 = require("../types");
var slash = types_1.StringConstant.slash;
var emptyScriptSrc = [
    'test',
    'empty-script.js'
].join(slash);
var emptyStylesheetHref = [
    'test',
    'empty-stylesheet.css'
].join(slash);
var emptyScriptsSrcs = new Array(10).fill(emptyScriptSrc);
var emptyStylesheetHrefs = new Array(10).fill(emptyStylesheetHref);
exports.default = (function () { return describe('loadScript', function () {
    before(function () {
        return __awaiter(this, void 0, void 0, function () {
            var VamtigerBrowserMethod, loadScript;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        VamtigerBrowserMethod = window.VamtigerBrowserMethod;
                        loadScript = VamtigerBrowserMethod.loadScript;
                        return [4 /*yield*/, Promise.all(emptyScriptsSrcs.map(function (src) { return loadScript({ src: src }); }))];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, Promise.all(emptyStylesheetHrefs.map(function (href) { return loadScript({ href: href }); }))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
    it('Append to Document Head', function () {
        return __awaiter(this, void 0, void 0, function () {
            var head, scriptSelector, linkSelector, script, link;
            return __generator(this, function (_a) {
                head = document.head;
                scriptSelector = "script[src=\"" + emptyScriptSrc + "\"]";
                linkSelector = "link[href=\"" + emptyStylesheetHref + "\"]";
                script = head.querySelector(scriptSelector);
                link = head.querySelector(linkSelector);
                chai_1.expect(script).to.be.ok;
                chai_1.expect(link).to.be.ok;
                return [2 /*return*/];
            });
        });
    });
    it('Append once per script', function () {
        return __awaiter(this, void 0, void 0, function () {
            var head, scriptSelector, linkSelector, scripts, links;
            return __generator(this, function (_a) {
                head = document.head;
                scriptSelector = "script[src=\"" + emptyScriptSrc + "\"]";
                linkSelector = "link[href=\"" + emptyStylesheetHref + "\"]";
                scripts = Array.from(head.querySelectorAll(scriptSelector));
                links = Array.from(head.querySelectorAll(linkSelector));
                chai_1.expect(scripts.length).to.equal(1);
                chai_1.expect(links.length).to.equal(1);
                return [2 /*return*/];
            });
        });
    });
    it('remote script', function () {
        return __awaiter(this, void 0, void 0, function () {
            var VamtigerBrowserMethod, loadScript, script;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        VamtigerBrowserMethod = window.VamtigerBrowserMethod;
                        loadScript = VamtigerBrowserMethod.loadScript;
                        return [4 /*yield*/, loadScript({
                                src: emptyScriptSrc
                            })];
                    case 1:
                        script = _a.sent();
                        chai_1.expect(script instanceof HTMLScriptElement).to.be.true;
                        return [2 /*return*/];
                }
            });
        });
    });
    it('remote stylesheet', function () {
        return __awaiter(this, void 0, void 0, function () {
            var VamtigerBrowserMethod, loadScript, script;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        VamtigerBrowserMethod = window.VamtigerBrowserMethod;
                        loadScript = VamtigerBrowserMethod.loadScript;
                        return [4 /*yield*/, loadScript({
                                href: emptyStylesheetHref
                            })];
                    case 1:
                        script = _a.sent();
                        chai_1.expect(script instanceof HTMLLinkElement).to.be.true;
                        return [2 /*return*/];
                }
            });
        });
    });
    it('inline script', function () {
        return __awaiter(this, void 0, void 0, function () {
            var VamtigerBrowserMethod, loadScript, script;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        VamtigerBrowserMethod = window.VamtigerBrowserMethod;
                        loadScript = VamtigerBrowserMethod.loadScript;
                        return [4 /*yield*/, loadScript({
                                js: 'console.log("inline script");',
                                name: 'inline-script'
                            })];
                    case 1:
                        script = _a.sent();
                        chai_1.expect(script instanceof HTMLScriptElement).to.be.true;
                        chai_1.expect(script.dataset.name).to.equal('inline-script');
                        return [2 /*return*/];
                }
            });
        });
    });
    it('inline stylesheet', function () {
        return __awaiter(this, void 0, void 0, function () {
            var VamtigerBrowserMethod, loadScript, script;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        VamtigerBrowserMethod = window.VamtigerBrowserMethod;
                        loadScript = VamtigerBrowserMethod.loadScript;
                        return [4 /*yield*/, loadScript({
                                css: '/** Inline Stylesheet **/',
                                name: 'inline-stylesheet'
                            })];
                    case 1:
                        script = _a.sent();
                        chai_1.expect(script instanceof HTMLStyleElement).to.be.true;
                        chai_1.expect(script.dataset.name).to.equal('inline-stylesheet');
                        return [2 /*return*/];
                }
            });
        });
    });
}); });
//# sourceMappingURL=load-script.js.map