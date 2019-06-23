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
var types_1 = require("./types");
var load_element_query_css_1 = require("./load-element-query-css");
var get_transpiled_js_1 = require("./get-transpiled-js");
var parse = JSON.parse;
var failedToLoadScript = types_1.ErrorMessage.failedToLoadScript;
var stylesheet = types_1.LinkRel.stylesheet;
var scriptElement = types_1.LoadScriptElement.script, link = types_1.LoadScriptElement.link, style = types_1.LoadScriptElement.style;
var remoteUrl = types_1.regex.remoteUrl, jsJsonJs = types_1.regex.jsJsonJs, jsonJs = types_1.regex.jsonJs, trailingJs = types_1.regex.trailingJs;
var nothing = types_1.StringConstant.nothing, slash = types_1.StringConstant.slash;
function default_1(params) {
    return loadScript(params);
}
exports.default = default_1;
function loadScript(params) {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        function handleLoad() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!script) return [3 /*break*/, 3];
                            removeEventListeners();
                            if (removeFromDom) {
                                head.removeChild(script);
                            }
                            if (!(src && src.match(jsJsonJs))) return [3 /*break*/, 2];
                            return [4 /*yield*/, loadJsJsonJs({ src: src })];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            resolve(script);
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
        function handleLoadError(event) {
            removeEventListeners();
            console.error(event);
            reject(new Error("" + failedToLoadScript));
        }
        function removeEventListeners() {
            if (script) {
                script.removeEventListener('load', handleLoad);
                script.removeEventListener('error', handleLoadError);
            }
        }
        var head, body, _a, js, scriptName, jsonld, removeFromDom, src, transpiledJs, _b, _c, css, stylesheetName, href, json, remoteScript, element, selector, existingScript, script;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    head = document.head, body = document.body;
                    _a = params, js = _a.js, scriptName = _a.name, jsonld = _a.jsonld, removeFromDom = _a.removeFromDom;
                    src = params.src;
                    _b = (js || src && !src.match(remoteUrl));
                    if (!_b) return [3 /*break*/, 2];
                    return [4 /*yield*/, get_transpiled_js_1.default({ js: js, url: src })];
                case 1:
                    _b = (_d.sent());
                    _d.label = 2;
                case 2:
                    transpiledJs = _b || '';
                    _c = params, css = _c.css, stylesheetName = _c.name;
                    href = params.href;
                    json = params.json;
                    remoteScript = params.hasOwnProperty('src') || params.hasOwnProperty('href');
                    element = (js || json || src) && scriptElement
                        || css && style
                        || href && link;
                    selector = src && "script[src=\"" + src + "\"]"
                        || href && "link[href=\"" + href + "\"]"
                        || js && scriptName && "script[data-name=\"" + scriptName + "\"]"
                        || jsonld && scriptName && "script[data-name=\"" + scriptName + "\"][type=\"" + types_1.ScriptType.jsonld + "\"]"
                        || css && stylesheetName && "style[data-name=\"" + stylesheetName + "\"]";
                    existingScript = (head.querySelector(selector) || body.querySelector(selector));
                    script = selector
                        && element
                        && document.createElement(element);
                    if (script instanceof HTMLScriptElement) {
                        if (!transpiledJs && src) {
                            script.src = src;
                        }
                        else if (json || transpiledJs || js) {
                            script.innerHTML = json || transpiledJs || js;
                            script.dataset.name = scriptName || src;
                            if (jsonld) {
                                script.setAttribute(types_1.ScriptAttribute.type, types_1.ScriptType.jsonld);
                                script.dataset.jsonLd = script.dataset.name;
                            }
                            else if (json) {
                                script.setAttribute(types_1.ScriptAttribute.type, types_1.ScriptType.json);
                            }
                            else if (transpiledJs) {
                                script.dataset.transpiledJs = nothing;
                            }
                        }
                    }
                    else if (script instanceof HTMLLinkElement) {
                        script.rel = stylesheet;
                        script.href = href;
                    }
                    else if (script instanceof HTMLStyleElement) {
                        script.innerHTML = css;
                        script.dataset.name = stylesheetName;
                        load_element_query_css_1.default({
                            css: css,
                            stylesheetName: stylesheetName
                        });
                    }
                    if (existingScript) {
                        resolve(existingScript);
                    }
                    else if (script) {
                        script.addEventListener('load', handleLoad);
                        script.addEventListener('error', handleLoadError);
                        head.appendChild(script);
                        if (transpiledJs || !remoteScript) {
                            handleLoad();
                        }
                    }
                    return [2 /*return*/];
            }
        });
    }); });
}
;
function loadJsJsonJs(_a) {
    var src = _a.src;
    return __awaiter(this, void 0, void 0, function () {
        var head, paths, scriptName, selector, jsJsonJsScript, json, js, name, loadedScript, _b, removeScripts;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    head = document.head;
                    paths = src
                        .replace(trailingJs, nothing)
                        .split(slash);
                    scriptName = paths[paths.length - 1];
                    selector = src && scriptName && "script[type=\"" + types_1.ScriptType.json + "\"][data-name=\"" + scriptName + "\"]";
                    jsJsonJsScript = selector && head.querySelector(selector);
                    json = jsJsonJsScript && jsJsonJsScript.innerHTML && parse(jsJsonJsScript.innerHTML);
                    js = json && json.text;
                    name = src.replace(jsonJs, nothing);
                    _b = name && js;
                    if (!_b) return [3 /*break*/, 2];
                    return [4 /*yield*/, loadScript({ name: name, js: js }).catch(handleError)];
                case 1:
                    _b = (_c.sent());
                    _c.label = 2;
                case 2:
                    loadedScript = _b;
                    removeScripts = [
                        jsJsonJsScript,
                        loadedScript
                    ];
                    removeScripts.forEach(function (currentScript) { return currentScript && head.removeChild(currentScript); });
                    return [2 /*return*/];
            }
        });
    });
}
function handleError(error) {
    console.warn(error.name);
    console.warn(error.message);
    console.warn(error.stack);
}
//# sourceMappingURL=load-script.js.map