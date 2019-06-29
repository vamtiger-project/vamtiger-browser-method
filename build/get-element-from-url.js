"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var types_1 = require("./types");
var load_container_stylesheets_1 = require("./load-container-stylesheets");
var noElementName = types_1.ErrorMessage.noElementName, noElementSelector = types_1.ErrorMessage.noElementSelector, noTemplateUrl = types_1.ErrorMessage.noTemplateUrl, noTemplateForUrl = types_1.ErrorMessage.noTemplateForUrl, noElementForSelector = types_1.ErrorMessage.noElementForSelector;
function default_1(params) {
    return __awaiter(this, void 0, void 0, function () {
        var name, url, selector, loadStylesheets, head, template, _a, container, element, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    name = params.name, url = params.url, selector = params.selector, loadStylesheets = params.loadStylesheets;
                    head = document.head;
                    _a = name && selector && url;
                    if (!_a) return [3 /*break*/, 2];
                    return [4 /*yield*/, fetch(url)
                            .then(function (response) { return response.text(); })];
                case 1:
                    _a = (_c.sent());
                    _c.label = 2;
                case 2:
                    template = _a;
                    container = template && document.createElement(types_1.TagName.template);
                    element = null;
                    if (!name) {
                        throw new Error(noElementName);
                    }
                    else if (!selector) {
                        throw new Error(noElementSelector);
                    }
                    else if (!url) {
                        throw new Error(noTemplateUrl);
                    }
                    else if (!template) {
                        throw new Error(noTemplateForUrl);
                    }
                    if (!container) return [3 /*break*/, 5];
                    container.innerHTML = template;
                    element = container.content.querySelector(selector);
                    _b = loadStylesheets && element;
                    if (!_b) return [3 /*break*/, 4];
                    return [4 /*yield*/, load_container_stylesheets_1.default(__assign({}, params, { container: container }))];
                case 3:
                    _b = (_c.sent());
                    _c.label = 4;
                case 4:
                    _b;
                    _c.label = 5;
                case 5:
                    if (!element) {
                        throw new Error(noElementForSelector);
                    }
                    element.setAttribute('dataset-name', name);
                    return [2 /*return*/, element];
            }
        });
    });
}
exports.default = default_1;
//# sourceMappingURL=get-element-from-url.js.map