(function () {
'use strict';

const __assign = Object.assign || function (target) {
    for (var source, i = 1; i < arguments.length; i++) {
        source = arguments[i];
        for (var prop in source) {
            if (Object.prototype.hasOwnProperty.call(source, prop)) {
                target[prop] = source[prop];
            }
        }
    }
    return target;
};

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
}

var Environment;
(function (Environment) {
    Environment["window"] = "window";
    Environment["worker"] = "worker";
})(Environment || (Environment = {}));
var EventName;
(function (EventName) {
    EventName["vamtigerBrowserMethodReady"] = "vamtigerBrowserMethodReady";
})(EventName || (EventName = {}));
var TimeoutDuration;
(function (TimeoutDuration) {
    TimeoutDuration[TimeoutDuration["webComponent"] = 60000] = "webComponent";
    TimeoutDuration[TimeoutDuration["indexDbIsAccessible"] = 100] = "indexDbIsAccessible";
})(TimeoutDuration || (TimeoutDuration = {}));
var MessageQueueName;
(function (MessageQueueName) {
    MessageQueueName["webComponent"] = "webComponent";
})(MessageQueueName || (MessageQueueName = {}));
var Prefix;
(function (Prefix) {
    Prefix["vamtigerBrowserMethod"] = "vamtiger-browser-method";
    Prefix["db"] = "vamtiger-browser-method";
    Prefix["messageIdWindow"] = "vamtiger-browser-method-window";
    Prefix["messageIdWorker"] = "vamtiger-browser-method-worker";
})(Prefix || (Prefix = {}));
var ElementId;
(function (ElementId) {
    ElementId["metaElement"] = "vamtiger-browser-method";
})(ElementId || (ElementId = {}));
var Origin;
(function (Origin) {
    Origin["nowhere"] = "";
    Origin["everyWhere"] = "*";
})(Origin || (Origin = {}));
var HostName;
(function (HostName) {
    HostName["localHost"] = "localhost";
})(HostName || (HostName = {}));
var LocalHostRelativePath;
(function (LocalHostRelativePath) {
    LocalHostRelativePath["vamtigerBrowserMethod"] = "vamtiger-browser-method.js";
})(LocalHostRelativePath || (LocalHostRelativePath = {}));
var ScriptType;
(function (ScriptType) {
    ScriptType["js"] = "text/javascript";
    ScriptType["babel"] = "text/babel";
    ScriptType["json"] = "application/json";
    ScriptType["jsonld"] = "application/ld+json";
})(ScriptType || (ScriptType = {}));
var ScriptAttribute;
(function (ScriptAttribute) {
    ScriptAttribute["type"] = "type";
})(ScriptAttribute || (ScriptAttribute = {}));
var DataAttribute;
(function (DataAttribute) {
    DataAttribute["vamtigerElementQuery"] = "vamtigerLoadElementQueryCss";
    DataAttribute["elementQueryCssLoaded"] = "elementQueryCssLoaded";
    DataAttribute["customElementName"] = "customElementName";
    DataAttribute["visible"] = "visible";
})(DataAttribute || (DataAttribute = {}));
var ErrorMessage;
(function (ErrorMessage) {
    ErrorMessage["failedToLoadScript"] = "Failed to load script";
    ErrorMessage["windowPropertyNotSet"] = "Window property not set";
    ErrorMessage["unsupportedFeature"] = "Unsupported feature";
    ErrorMessage["customElementAreadyDefined"] = "Custom element already defined";
    ErrorMessage["noElementName"] = "No Element Name";
    ErrorMessage["noTemplateUrl"] = "No Template URL";
    ErrorMessage["noElementSelector"] = "No Template Selector";
    ErrorMessage["noTemplateForUrl"] = "No Template for URL";
    ErrorMessage["noTemplate"] = "No Template";
    ErrorMessage["noElementForSelector"] = "No Element for Selector";
    ErrorMessage["noJsonLdParameter"] = "No \"jsonLd\" property set";
})(ErrorMessage || (ErrorMessage = {}));
var StringConstant;
(function (StringConstant) {
    StringConstant["nothing"] = "";
    StringConstant["slash"] = "/";
    StringConstant["dash"] = "-";
    StringConstant["pipe"] = "|";
    StringConstant["comma"] = ",";
    StringConstant["backTick"] = "`";
    StringConstant["doubleQuote"] = "\"";
    StringConstant["commaSpace"] = ", ";
    StringConstant["space"] = " ";
    StringConstant["period"] = ".";
    StringConstant["newline"] = "\n";
    StringConstant["semiColon"] = ";";
})(StringConstant || (StringConstant = {}));
var TagName;
(function (TagName) {
    TagName["div"] = "div";
    TagName["template"] = "template";
})(TagName || (TagName = {}));
var LinkRel;
(function (LinkRel) {
    LinkRel["stylesheet"] = "stylesheet";
})(LinkRel || (LinkRel = {}));
var LoadScriptElement;
(function (LoadScriptElement) {
    LoadScriptElement["script"] = "script";
    LoadScriptElement["link"] = "link";
    LoadScriptElement["style"] = "style";
})(LoadScriptElement || (LoadScriptElement = {}));
var Selector;
(function (Selector) {
    Selector["lastStylesheet"] = "style:last-of-type";
    Selector["lastMetaElement"] = "head > meta:last-of-type";
    Selector["webcomponentsjs"] = "script[src*=\"@webcomponents/webcomponentsjs\"]";
    Selector["style"] = "style";
    Selector["stylesheet"] = " link[rel=\"stylesheet\"]";
    Selector["vamtigerBrowserMethodJsonJs"] = "[src$=\"vamtiger-browser-method.js.json.js\"]";
    Selector["worker"] = "[src$=\"js.json.js\"][data-worker]";
    Selector["workderDependency"] = "script[data-worker-dependency]";
    Selector["vamtigerBrowserMethodJson"] = "[data-name$=\"vamtiger-browser-method.js.json\"]";
    Selector["vamtigerBrowserMethod"] = "[data-name$=\"vamtiger-browser-method.js\"]";
    Selector["script"] = "script";
    Selector["jsonScript"] = "script[type=\"application/json\"]";
    Selector["jsonLdScript"] = "script[type=\"application/ld+json\"]";
    Selector["a"] = "a";
    Selector["linkedDataCaption"] = "[data-linked-data-caption]";
    Selector["linkedDataCaptionElement"] = "[data-linked-data-caption-element]";
    Selector["jsonLdViewer"] = "vamtiger-json-ld-viewer";
    Selector["transpiledJs"] = "[data-transpiled-js]";
    Selector["htmlTextMode"] = "html[data-vamtiger-text-mode]";
    Selector["customElementNameMetaElement"] = "meta[data-custom-element-name]";
})(Selector || (Selector = {}));
var TextModeElementName;
(function (TextModeElementName) {
    TextModeElementName["vamtigerJsonLdViewer"] = "vamtiger-json-ld-viewer";
})(TextModeElementName || (TextModeElementName = {}));
var MetaElementName;
(function (MetaElementName) {
    MetaElementName["loadElementQueryCss"] = "vamtiger-load-element-query-css";
})(MetaElementName || (MetaElementName = {}));
var ScriptNameSuffix;
(function (ScriptNameSuffix) {
    ScriptNameSuffix["style"] = "style";
    ScriptNameSuffix["stylesheet"] = "stylesheet";
})(ScriptNameSuffix || (ScriptNameSuffix = {}));
var ScriptName;
(function (ScriptName) {
    ScriptName["textMode"] = "vamtiger-text-mode";
})(ScriptName || (ScriptName = {}));
var MessageAction;
(function (MessageAction) {
    MessageAction["ignore"] = "ignore";
    MessageAction["removeRedundantScripts"] = "removeRedundantScripts";
    MessageAction["setWorkerSupport"] = "setWorkerSupport";
    MessageAction["saveWebComponentData"] = "saveWebComponentData";
    MessageAction["getWebComponentData"] = "getWebComponentData";
    MessageAction["dequeue"] = "dequeue";
    MessageAction["loadWebComponentData"] = "loadWebComponentData";
    MessageAction["saveSupport"] = "saveSupport";
    MessageAction["saveCustomElementName"] = "saveCustomElementName";
    MessageAction["getTextModeCss"] = "getTextModeCss";
    MessageAction["loadScript"] = "loadScript";
})(MessageAction || (MessageAction = {}));
var DbName;
(function (DbName) {
    DbName["vamtigerBrowserSupport"] = "vamtiger-browser-support";
})(DbName || (DbName = {}));
var DbStoreName;
(function (DbStoreName) {
    DbStoreName["support"] = "support";
    DbStoreName["webComponent"] = "web-component";
    DbStoreName["customElementName"] = "custom-element-name";
})(DbStoreName || (DbStoreName = {}));
var DbMode;
(function (DbMode) {
    DbMode["readonly"] = "readonly";
    DbMode["readwrite"] = "readwrite";
    DbMode["versionchange"] = "versionchange";
})(DbMode || (DbMode = {}));
var DbKeyPath;
(function (DbKeyPath) {
    DbKeyPath["webComponent"] = "url";
    DbKeyPath["support"] = "environment";
    DbKeyPath["customElementName"] = "name";
})(DbKeyPath || (DbKeyPath = {}));
var Dependency;
(function (Dependency) {
    Dependency["lodash"] = "https://vamtiger-project.github.io/vamtiger-browser-method/build/lodash.min.js.json.js";
    Dependency["jsonLdViewer"] = "https://vamtiger-project.github.io/vamtiger-json-ld-viewer/build/vamtiger-json-ld-viewer.js.json.js";
})(Dependency || (Dependency = {}));
var regex = {
    showRootHost: /:{1,2}host/gm,
    dash: new RegExp(StringConstant.dash, 'g'),
    space: /\s/g,
    nonWord: /\W+/g,
    backTicks: /`/gm,
    remoteUrl: /^http(s)?/i,
    jsJsonJs: /\.js\.json\.js$/,
    jsonJs: /\.json\.js$/,
    trailingJs: /\.js$/,
    uppercase: /[A-Z]/,
    leadingAt: /^@/,
    email: /^email$/i,
    textModeElement: new RegExp(Object.keys(TextModeElementName)
        .map(function (key) { return TextModeElementName[key]; })
        .join(StringConstant.pipe), 'i')
};
var selector = {
    redundantScripts: [
        Selector.vamtigerBrowserMethodJsonJs,
        Selector.vamtigerBrowserMethodJson,
        Selector.vamtigerBrowserMethod,
        Selector.transpiledJs
    ].concat(Object.keys(Dependency).map(function (key) { return "[src=\"" + Dependency[key] + "\"]"; })).join(StringConstant.comma)
};
var sendMessageFromWorker = postMessage;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global global, define, System, Reflect, Promise */
var __extends$1;
var __assign$1;
var __rest;
var __decorate$1;
var __param$1;
var __metadata$1;
var __awaiter$1;
var __generator$1;
var __exportStar;
var __values;
var __read;
var __spread;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function (exports) { factory(createExporter(root, createExporter(exports))); });
    }
    else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
    }
    else {
        factory(createExporter(root));
    }
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

    __extends$1 = function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign$1 = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    };

    __decorate$1 = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param$1 = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __metadata$1 = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter$1 = function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator$1 = function (thisArg, body) {
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

    __exportStar = function (m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    };

    __values = function (o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result["default"] = mod;
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    exporter("__extends", __extends$1);
    exporter("__assign", __assign$1);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate$1);
    exporter("__param", __param$1);
    exporter("__metadata", __metadata$1);
    exporter("__awaiter", __awaiter$1);
    exporter("__generator", __generator$1);
    exporter("__exportStar", __exportStar);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
});


var tslib = Object.freeze({

});

var tsLibKeys = Object.keys(tslib);
tsLibKeys.forEach(function (key) {
    if (!self[key]) {
        self[key] = tslib[key];
    }
});

var nothing = StringConstant.nothing;
function getMetaElment (_a) {
    var _b = _a.selector, selector$$1 = _b === void 0 ? nothing : _b, _c = _a.properties, properties = _c === void 0 ? {} : _c, _d = _a.dataset, dataset = _d === void 0 ? {} : _d, _e = _a.attributes, attributes = _e === void 0 ? {} : _e;
    var id = properties.id;
    var head = document.head;
    var lastMetaElement = head.querySelector(Selector.lastMetaElement);
    var attributeKeys = Object.keys(attributes);
    var existingMetaElement = id && (window[id]
        || selector$$1 && head.querySelector(selector$$1));
    var newMetaElment = !existingMetaElement && document.createElement('meta');
    var metaElement = (existingMetaElement || newMetaElment);
    var dataKey;
    if (newMetaElment) {
        Object.assign(newMetaElment, properties);
        Object.assign(newMetaElment.dataset, dataset);
        if (lastMetaElement && lastMetaElement.nextElementSibling) {
            head.insertBefore(newMetaElment, lastMetaElement.nextElementSibling);
        }
        else {
            head.appendChild(newMetaElment);
        }
    }
    attributeKeys.forEach(function (key) { return !metaElement.hasAttribute(key) && metaElement.setAttribute(dataKey, attributes[key]); });
    return metaElement;
}

var requestIdleCallback = self.requestIdleCallback;
var showRootHost = regex.showRootHost;
var nothing$1 = StringConstant.nothing;
function loadElementQueryCss (params) {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (requestIdleCallback) {
                requestIdleCallback(function () { return loadElementQueryCss$1(params).then(resolve).catch(reject); });
            }
            else {
                setTimeout(function () { return loadElementQueryCss$1(params).then(resolve).catch(reject); }, 0);
            }
            return [2 /*return*/];
        });
    }); });
}
function loadElementQueryCss$1(_a) {
    var css = _a.css, _b = _a.stylesheetName, currentStylesheetName = _b === void 0 ? nothing$1 : _b, _c = _a.hostName, hostName = _c === void 0 ? nothing$1 : _c;
    return __awaiter(this, void 0, void 0, function () {
        var _, camelCase, metaElement, stylesheetName, dataset, elementQueryCss, EQCSS;
        return __generator(this, function (_d) {
            _ = self._;
            camelCase = _.camelCase;
            metaElement = getMetaElment({
                properties: {
                    id: MetaElementName.loadElementQueryCss
                }
            });
            stylesheetName = camelCase(currentStylesheetName);
            dataset = metaElement.dataset;
            elementQueryCss = !dataset.hasOwnProperty(hostName) && (hostName && css.replace(showRootHost, hostName)) || css;
            EQCSS = self.EQCSS;
            if (elementQueryCss && EQCSS) {
                EQCSS.register(EQCSS.parse(elementQueryCss));
                if (stylesheetName) {
                    dataset[stylesheetName] = nothing$1;
                }
                else if (hostName) {
                    dataset[hostName] = nothing$1;
                }
            }
            return [2 /*return*/, true];
        });
    });
}

var babel = {
    presets: ['es2015']
};
var jsonLdEntryValueType = new Set([
    typeof 1,
    typeof '',
    typeof true
]);
var getDependencies = function () { return [
    !self._ && Dependency.lodash || ''
].filter(function (dependency) { return dependency; }); };
var intersectionObserverThreshold = new Array(4)
    .fill(undefined)
    .map(function (value, index) { return (index + 1) * 0.25; });
var intersectionObserver = {
    root: null,
    rootMargin: '0px',
    threshold: intersectionObserverThreshold
};

var nothing$2 = StringConstant.nothing;
function getTranspiledJs (_a) {
    var url = _a.url, js = _a.js;
    return __awaiter(this, void 0, void 0, function () {
        var fetch, Babel, transform, code, _b, _c, _d, transpiledCode, transpiledJs;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    fetch = self.fetch, Babel = self.Babel;
                    transform = (Babel || { transform: undefined }).transform;
                    _b = transform;
                    if (!_b) return [3 /*break*/, 4];
                    _c = js;
                    if (_c) return [3 /*break*/, 3];
                    _d = url;
                    if (!_d) return [3 /*break*/, 2];
                    return [4 /*yield*/, fetch(url)
                            .then(function (response) { return response && response.text(); })
                            .catch(handleError)];
                case 1:
                    _d = (_e.sent());
                    _e.label = 2;
                case 2:
                    _c = _d;
                    _e.label = 3;
                case 3:
                    _b = (_c);
                    _e.label = 4;
                case 4:
                    code = _b;
                    transpiledCode = (code && code.trim() && transform && transform(code, babel) || { code: '' }).code;
                    transpiledJs = transpiledCode || js;
                    return [2 /*return*/, transpiledJs];
            }
        });
    });
}
function handleError(error) {
    var transpiledJs = '';
    console.warn(error.message);
    console.warn(error.stack);
    return transpiledJs;
}

function isWindow () {
    var VamtigerBrowserMethod = self.VamtigerBrowserMethod;
    var environment = VamtigerBrowserMethod.environment;
    var isWindow = environment === Environment.window;
    return isWindow;
}

function isWorker () {
    var VamtigerBrowserMethod = self.VamtigerBrowserMethod;
    var environment = VamtigerBrowserMethod.environment;
    var isWorker = environment === Environment.worker;
    return isWorker;
}

var stringify = JSON.stringify;
var textEncoder = new TextEncoder();
function sendMessage (params) {
    var VamtigerBrowserMethod = self.VamtigerBrowserMethod;
    var worker = VamtigerBrowserMethod.worker, support = VamtigerBrowserMethod.support;
    var textEncoderSupport = (support || {}).textEncoder;
    var stringMessage = stringify(params);
    var message = textEncoderSupport && textEncoder.encode(stringMessage)
        || stringMessage;
    isWindow() && worker && worker.postMessage(message);
    isWorker() && sendMessageFromWorker(message);
}

var parse = JSON.parse;
function isJsonScript (_a) {
    var script = _a.script;
    var innerHTML = script.innerHTML;
    var isJson = false;
    try {
        parse(innerHTML);
        isJson = true;
    }
    catch (error) {
        console.warn(error);
        isJson = false;
    }
    return isJson;
}

var requestIdleCallback$1 = self.requestIdleCallback;
var dash = StringConstant.dash;
var prefix = Prefix.vamtigerBrowserMethod;
function removeRedundantScripts (params) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = isWindow();
                    if (!_a) return [3 /*break*/, 2];
                    return [4 /*yield*/, removeRedundantScripts$1(params)];
                case 1:
                    _a = (_b.sent());
                    _b.label = 2;
                case 2:
                    isWorker() && sendRemoveRedundantScriptsMessage(params);
                    return [2 /*return*/];
            }
        });
    });
}
function removeRedundantScripts$1(params) {
    return __awaiter(this, void 0, void 0, function () {
        var parent;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    parent = document.head;
                    return [4 /*yield*/, removeScripts(__assign({}, params, { parent: parent }))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function removeScripts(params) {
    return new Promise(function (resolve, reject) {
        if (requestIdleCallback$1) {
            requestIdleCallback$1(function () { return removeScriptsFromParent(__assign({}, params, { resolve: resolve, reject: reject })); });
        }
        else {
            setTimeout(function () { return removeScriptsFromParent(__assign({}, params, { resolve: resolve, reject: reject })); }, 0);
        }
    });
}
function removeScriptsFromParent(_a) {
    var selector$$1 = _a.selector, parent = _a.parent, resolve = _a.resolve, reject = _a.reject;
    var head = document.head;
    var scripts = Array.from(parent.querySelectorAll(selector$$1));
    var jsScripts = scripts.filter(function (_a) {
        var type = _a.type, src = _a.src;
        return src || !type || type === ScriptType.js;
    });
    var jsonScripts = scripts
        .filter(function (_a) {
        var type = _a.type;
        return type === ScriptType.json;
    })
        .filter(function (script) { return isJsonScript({ script: script }); });
    var jsonLdScripts = scripts
        .filter(function (_a) {
        var type = _a.type;
        return type === ScriptType.jsonld;
    })
        .filter(function (script) { return isJsonScript({ script: script }); });
    var safeScripts = jsonLdScripts.concat(jsonScripts);
    var time = new Date().getTime();
    var jsonScriptName = jsonScripts.length && [
        prefix,
        ScriptType.json,
        time
    ].join(dash);
    var jsonScriptSelector = jsonScriptName && "script[type=\"" + ScriptType.json + "\"][data-name=\"" + jsonScriptName + "\"]";
    var jsonLdScriptName = jsonLdScripts.length && [
        prefix,
        ScriptType.jsonld,
        time
    ].join(dash);
    var jsonLdScriptSelector = jsonLdScriptName && "script[type=\"" + ScriptType.jsonld + "\"][data-name=\"" + jsonLdScriptName + "\"]";
    jsScripts.length && jsonScriptName && jsScripts.forEach(function (_a) {
        var dataset = _a.dataset;
        return dataset.name = jsonScriptName || '';
    });
    jsonLdScripts.length && jsonLdScriptName && jsonLdScriptSelector && jsonLdScripts.forEach(function (_a) {
        var dataset = _a.dataset;
        return dataset.name = jsonLdScriptName || '';
    });
    if (jsonScriptSelector && parent !== head) {
        parent.dataset.json = jsonScriptSelector;
    }
    if (jsonLdScriptSelector && parent !== head) {
        parent.dataset.jsonLd = jsonLdScriptSelector;
    }
    if (scripts.length) {
        parent.dataset.removedScripts = (Number(parent.dataset.removedScripts || 0) + scripts.length).toString();
    }
    safeScripts.forEach(function (script) { return head.appendChild(script); });
    scripts.forEach(function (script) { return parent.removeChild(script); });
    resolve && resolve();
}
function sendRemoveRedundantScriptsMessage(_a) {
    var selector$$1 = _a.selector;
    var massage = {
        action: MessageAction.removeRedundantScripts,
        params: {
            selector: selector$$1
        }
    };
    sendMessage(massage);
}

var parse$1 = JSON.parse;
var failedToLoadScript = ErrorMessage.failedToLoadScript;
var stylesheet = LinkRel.stylesheet;
var scriptElement = LoadScriptElement.script, link = LoadScriptElement.link, style = LoadScriptElement.style;
var remoteUrl = regex.remoteUrl, jsJsonJs = regex.jsJsonJs, jsonJs = regex.jsonJs, trailingJs = regex.trailingJs;
var nothing$3 = StringConstant.nothing, slash = StringConstant.slash;
function loadScript (params) {
    return loadScript$1(params);
}
function loadScript$1(params) {
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
                            return [4 /*yield*/, loadJsJsonJs({ src: src, workerDependency: workerDependency })];
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
        var head, body, _a, js, scriptName, jsonld, removeFromDom, _b, workerDependency, src, transpiledJs, _c, _d, css, stylesheetName, href, json, remoteScript, element, selector$$1, existingScript, script;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    head = document.head, body = document.body;
                    _a = params, js = _a.js, scriptName = _a.name, jsonld = _a.jsonld, removeFromDom = _a.removeFromDom, _b = _a.workerDependency, workerDependency = _b === void 0 ? false : _b;
                    src = params.src;
                    _c = (js || src && !src.match(remoteUrl));
                    if (!_c) return [3 /*break*/, 2];
                    return [4 /*yield*/, getTranspiledJs({ js: js, url: src })];
                case 1:
                    _c = (_e.sent());
                    _e.label = 2;
                case 2:
                    transpiledJs = _c || '';
                    _d = params, css = _d.css, stylesheetName = _d.name;
                    href = params.href;
                    json = params.json;
                    remoteScript = params.hasOwnProperty('src') || params.hasOwnProperty('href');
                    element = (js || json || src) && scriptElement
                        || css && style
                        || href && link;
                    selector$$1 = src && "script[src=\"" + src + "\"]"
                        || href && "link[href=\"" + href + "\"]"
                        || js && scriptName && "script[data-name=\"" + scriptName + "\"]"
                        || jsonld && scriptName && "script[data-name=\"" + scriptName + "\"][type=\"" + ScriptType.jsonld + "\"]"
                        || css && stylesheetName && "style[data-name=\"" + stylesheetName + "\"]";
                    existingScript = (head.querySelector(selector$$1) || body.querySelector(selector$$1));
                    script = selector$$1
                        && element
                        && document.createElement(element);
                    if (!(script instanceof HTMLScriptElement)) return [3 /*break*/, 3];
                    if (!transpiledJs && src) {
                        script.src = src;
                    }
                    else if (json || transpiledJs || js) {
                        script.innerHTML = json || transpiledJs || js;
                        script.dataset.name = scriptName || src;
                        if (jsonld) {
                            script.setAttribute(ScriptAttribute.type, ScriptType.jsonld);
                            script.dataset.jsonLd = script.dataset.name;
                        }
                        else if (json) {
                            script.setAttribute(ScriptAttribute.type, ScriptType.json);
                        }
                        else if (transpiledJs) {
                            script.dataset.transpiledJs = nothing$3;
                        }
                    }
                    return [3 /*break*/, 6];
                case 3:
                    if (!(script instanceof HTMLLinkElement)) return [3 /*break*/, 4];
                    script.rel = stylesheet;
                    script.href = href;
                    return [3 /*break*/, 6];
                case 4:
                    if (!(script instanceof HTMLStyleElement)) return [3 /*break*/, 6];
                    script.innerHTML = css;
                    script.dataset.name = stylesheetName;
                    return [4 /*yield*/, loadElementQueryCss({
                            css: css,
                            stylesheetName: stylesheetName
                        })];
                case 5:
                    _e.sent();
                    _e.label = 6;
                case 6:
                    if (existingScript) {
                        resolve(existingScript);
                    }
                    else if (script) {
                        script.addEventListener('load', handleLoad);
                        script.addEventListener('error', handleLoadError);
                        head.appendChild(script);
                        if (workerDependency) {
                            script.dataset.workerDependency = nothing$3;
                        }
                        if (transpiledJs || !remoteScript) {
                            handleLoad();
                        }
                    }
                    return [2 /*return*/];
            }
        });
    }); });
}
function loadJsJsonJs(_a) {
    var src = _a.src, workerDependency = _a.workerDependency;
    return __awaiter(this, void 0, void 0, function () {
        var head, paths, scriptName, selector$$1, jsJsonJsScript, json, js, name, removeScriptSelector;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    head = document.head;
                    paths = src
                        .replace(trailingJs, nothing$3)
                        .split(slash);
                    scriptName = paths[paths.length - 1];
                    selector$$1 = src && scriptName && "script[type=\"" + ScriptType.json + "\"][data-name=\"" + scriptName + "\"]";
                    jsJsonJsScript = selector$$1 && head.querySelector(selector$$1);
                    json = jsJsonJsScript && jsJsonJsScript.innerHTML && parse$1(jsJsonJsScript.innerHTML);
                    js = json && json.text;
                    name = src.replace(jsonJs, nothing$3);
                    removeScriptSelector = [
                        "script[src=\"" + src + "\"]",
                        selector$$1,
                        Selector.transpiledJs
                    ].join(StringConstant.comma);
                    if (!(name && js)) return [3 /*break*/, 3];
                    return [4 /*yield*/, loadScript$1({ name: name, js: js, workerDependency: workerDependency }).catch(handleError$1)];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, removeRedundantScripts({ selector: removeScriptSelector })];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleError$1(error) {
    console.warn(error.name);
    console.warn(error.message);
    console.warn(error.stack);
}

function loadScripts (params) {
    var scripts = Promise.all(params.map(loadScript));
    return scripts;
}

var _this = undefined;
var loadScriptsSequentially = (function (params) { return new Promise(function (resolve, reject) {
    var scripts = new Set();
    var load = Promise.resolve();
    params.forEach(function (scriptParams) {
        load = load
            .then(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(scriptParams.map(loadScript))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); })
            .then(function (loadedScripts) { return loadedScripts.forEach(function (script) { return scripts.add(script); }); });
    });
    load = load.then(function () { return resolve(Array.from(scripts)); });
    return load;
}); });

function loadShadowStylesheet (_a) {
    var css = _a.css, element = _a.element;
    var shadowRoot = element.shadowRoot, hostName = element.localName;
    var lastStylesheet = shadowRoot && shadowRoot.querySelector(Selector.lastStylesheet);
    var stylesheet = shadowRoot && document.createElement('style');
    if (stylesheet && shadowRoot) {
        stylesheet.innerHTML = css;
        if (lastStylesheet && lastStylesheet.nextElementSibling) {
            shadowRoot.insertBefore(stylesheet, lastStylesheet.nextElementSibling);
        }
        else {
            shadowRoot.appendChild(stylesheet);
        }
    }
}

var dbName = DbName.vamtigerBrowserSupport;
function getDbParams (params) {
    return __awaiter(this, void 0, void 0, function () {
        var storeName, keyPath, mode, db, transaction, store, dbParams;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    storeName = params.storeName, keyPath = params.keyPath, mode = params.mode;
                    return [4 /*yield*/, getDb()];
                case 1:
                    db = _a.sent();
                    transaction = db && db.transaction && db.transaction(storeName, mode);
                    store = transaction && transaction.objectStore && transaction.objectStore(storeName);
                    dbParams = {
                        db: db,
                        transaction: transaction,
                        store: store
                    };
                    return [2 /*return*/, dbParams];
            }
        });
    });
}
function getDb() {
    return new Promise(function (resolve, reject) {
        var dbRequest = indexedDB.open(dbName, 1);
        dbRequest.addEventListener('error', reject);
        dbRequest.addEventListener('upgradeneeded', function () { return handleUpgradeNeeded({ db: dbRequest.result }); });
        dbRequest.addEventListener('success', function () { return resolve(dbRequest.result); });
    });
}
function handleUpgradeNeeded(_a) {
    var db = _a.db;
    var storeNames = Object.keys(DbKeyPath);
    storeNames.forEach(function (storeName) { return !db.objectStoreNames.contains(storeName) && db.createObjectStore(DbStoreName[storeName], {
        keyPath: DbKeyPath[storeName]
    }); });
}

var mode = DbMode.readwrite;
function save (_a) {
    var storeName = _a.storeName, keyPath = _a.keyPath, data = _a.data, messageId = _a.messageId, action = _a.successAction;
    return __awaiter(this, void 0, void 0, function () {
        var store, save;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, getDbParams({
                        storeName: storeName,
                        keyPath: keyPath,
                        mode: mode
                    })];
                case 1:
                    store = (_b.sent()).store;
                    save = store.put(data);
                    save.addEventListener('error', handleError$2);
                    save.addEventListener('success', function () { return handleSuccess({ messageId: messageId, key: keyPath, action: action, data: data }); });
                    return [2 /*return*/];
            }
        });
    });
}
function handleSuccess(params) {
    var action = params.action, data = params.data;
    var message = action && {
        action: action,
        params: __assign({}, params, data)
    };
    message && sendMessage(message);
}
function handleError$2(error) {
    console.error(error);
    throw error;
}

var mode$1 = DbMode.readonly;
function getData (_a) {
    var storeName = _a.storeName, keyPath = _a.keyPath, key = _a.key;
    return __awaiter(this, void 0, Promise, function () {
        var _this = this;
        return __generator(this, function (_b) {
            return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    var store, get;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, getDbParams({
                                    storeName: storeName,
                                    keyPath: keyPath,
                                    mode: mode$1
                                })];
                            case 1:
                                store = (_a.sent()).store;
                                get = key && store.get(key) || store.getAll();
                                get.addEventListener('error', reject);
                                get.addEventListener('success', function () { return resolve(get.result); });
                                return [2 /*return*/];
                        }
                    });
                }); })];
        });
    });
}

function loadScript$2 (params) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    var requestIdleCallback = self.requestIdleCallback;
                    if (requestIdleCallback) {
                        requestIdleCallback(function () { return isWindow() && loadScriptWindow(params).then(resolve).catch(reject); });
                    }
                    else {
                        setTimeout(function () { return isWindow() && loadScriptWindow(params).then(resolve).catch(reject); }, 0);
                    }
                })];
        });
    });
}
function loadScriptWindow(params) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    var head, _a, name, removeExisting, selector, existingScript, ignore, _b, error_1;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                head = document.head;
                                _a = params, name = _a.name, removeExisting = _a.removeExisting;
                                selector = name && removeExisting && "[data-name=\"" + name + "\"]";
                                existingScript = selector && head.querySelector(selector);
                                ignore = existingScript && existingScript.innerHTML === (params.css || params.js);
                                _c.label = 1;
                            case 1:
                                _c.trys.push([1, 4, , 5]);
                                _b = !ignore;
                                if (!_b) return [3 /*break*/, 3];
                                return [4 /*yield*/, loadScript(params)];
                            case 2:
                                _b = (_c.sent());
                                _c.label = 3;
                            case 3:
                                resolve();
                                return [3 /*break*/, 5];
                            case 4:
                                error_1 = _c.sent();
                                reject(error_1);
                                return [3 /*break*/, 5];
                            case 5: return [2 /*return*/];
                        }
                    });
                }); })];
        });
    });
}

var keyPath = DbKeyPath.customElementName;
var storeName = DbStoreName.customElementName;
var comma = StringConstant.comma, semiColon = StringConstant.semiColon, nothing$4 = StringConstant.nothing;
var textModeElement = regex.textModeElement;
function getTextModeCss () {
    isWindow() && getTextModeCssWindow();
    isWorker() && getTextModeCssWorker();
}
function getTextModeCssWindow() {
    var VamtigerBrowserMethod = self.VamtigerBrowserMethod;
    var support = VamtigerBrowserMethod.support, workerSupport = VamtigerBrowserMethod.workerSupport, textMode = VamtigerBrowserMethod.textMode;
    var message = workerSupport && workerSupport.indexedDbIsAccessible && {
        action: MessageAction.getTextModeCss,
        params: {}
    };
    if (textMode && message) {
        sendMessage(message);
    }
    else if (textMode && support && support.indexedDbIsAccessible) {
        getTextModeCssWindowIndexDb();
    }
    else {
        getTextModeCssFromMetaElement();
    }
}
function getTextModeCssWindowIndexDb() {
    return __awaiter(this, void 0, void 0, function () {
        var customElementNames, names, css, params;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getData({
                        storeName: storeName,
                        keyPath: keyPath
                    })];
                case 1:
                    customElementNames = (_a.sent()) || [];
                    names = customElementNames.map(function (_a) {
                        var name = _a.name;
                        return name;
                    });
                    css = getCss(names);
                    params = css && {
                        name: ScriptName.textMode,
                        css: css,
                        removeExisting: true
                    };
                    params && loadScript$2(params);
                    return [2 /*return*/];
            }
        });
    });
}
function getTextModeCssWorker() {
    return __awaiter(this, void 0, void 0, function () {
        var customElementNames, names, css, message;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getData({
                        storeName: storeName,
                        keyPath: keyPath
                    })];
                case 1:
                    customElementNames = (_a.sent()) || [];
                    names = customElementNames.map(function (_a) {
                        var name = _a.name;
                        return name;
                    });
                    css = getCss(names);
                    message = css && {
                        action: MessageAction.loadScript,
                        params: {
                            name: ScriptName.textMode,
                            css: css,
                            removeExisting: true
                        }
                    };
                    message && sendMessage(message);
                    return [2 /*return*/];
            }
        });
    });
}
function getTextModeCssFromMetaElement() {
    var VamtigerBrowserMethod = self.VamtigerBrowserMethod;
    var metaElement = VamtigerBrowserMethod.metaElement;
    var customElementMetaElement = metaElement && metaElement.querySelector(Selector.customElementNameMetaElement);
    var names = customElementMetaElement && Array
        .from(customElementMetaElement.children)
        .map(function (_a) {
        var dataset = _a.dataset;
        return dataset.name || '';
    })
        .filter(function (name) { return name; })
        || [];
    var css = getCss(names);
    var params = css && {
        name: ScriptName.textMode,
        css: css,
        removeExisting: true
    };
    params && loadScript$2(params);
}
function getCss(names) {
    var selector$$1 = names
        .filter(function (name) { return !name.match(textModeElement); })
        .map(function (name) { return Selector.htmlTextMode + " " + name; })
        .join(comma);
    var cssBody = selector$$1 && [
        'display: none'
    ].join(semiColon);
    var css = selector$$1 && cssBody && [
        selector$$1,
        '{',
        cssBody,
        '}'
    ].join(nothing$4);
    return css;
}

var keyPath$1 = DbKeyPath.customElementName;
var storeName$1 = DbStoreName.customElementName;
function saveCustomElementName (params) {
    isWindow() && saveCustomElementNameWindow(params);
    isWorker() && saveCustomElementNameWorker(params);
}
function saveCustomElementNameWindow(params) {
    var VamtigerBrowserMethod = self.VamtigerBrowserMethod;
    var support = VamtigerBrowserMethod.support, workerSupport = VamtigerBrowserMethod.workerSupport;
    var message = workerSupport && workerSupport.indexedDbIsAccessible && {
        action: MessageAction.saveCustomElementName,
        params: params
    };
    if (message) {
        sendMessage(message);
    }
    else if (support && support.indexedDbIsAccessible) {
        saveCustomElementNameWindowIndexDb(params);
    }
    else {
        saveCustomeElementNameDocument(params);
    }
}
function saveCustomElementNameWorker(params) {
    saveCustomElementNameIndexDb(params);
}
function saveCustomElementNameIndexDb(params) {
    var name = params.name;
    var saveParams = name && {
        storeName: storeName$1,
        keyPath: keyPath$1,
        data: __assign({ name: name }, params),
        successAction: MessageAction.getTextModeCss
    };
    saveParams && save(saveParams);
}
function saveCustomElementNameWindowIndexDb(params) {
    return __awaiter(this, void 0, void 0, function () {
        var name, saveParams, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    name = params.name;
                    saveParams = name && {
                        storeName: storeName$1,
                        keyPath: keyPath$1,
                        data: __assign({ name: name }, params)
                    };
                    _a = saveParams;
                    if (!_a) return [3 /*break*/, 2];
                    return [4 /*yield*/, save(saveParams)];
                case 1:
                    _a = (_b.sent());
                    _b.label = 2;
                case 2:
                    getTextModeCss();
                    return [2 /*return*/];
            }
        });
    });
}
function saveCustomeElementNameDocument(_a) {
    var name = _a.name;
    var VamtigerBrowserMethod = self.VamtigerBrowserMethod;
    var metaElement = VamtigerBrowserMethod.metaElement;
    var customElementMetaElement = metaElement && metaElement.querySelector(Selector.customElementNameMetaElement);
    var selector$$1 = customElementMetaElement && "meta[data-name=\"" + name + "\"]";
    var existingMetaElement = selector$$1 && customElementMetaElement && customElementMetaElement.querySelector(selector$$1);
    var newMetaElement = !existingMetaElement && document.createElement('meta');
    if (customElementMetaElement && newMetaElement) {
        newMetaElement.dataset.name = name;
        customElementMetaElement.appendChild(newMetaElement);
        getTextModeCss();
    }
}

var unsupportedFeature = ErrorMessage.unsupportedFeature;
function defineCustomElement(_a) {
    var name = _a.name, constructor = _a.constructor, ignore$$1 = _a.ignore;
    var customElements = self.customElements;
    var define = customElements && customElements.define;
    var existingElement = define && customElements.get && customElements.get(name);
    if (define && !existingElement) {
        customElements.define(name, constructor);
        saveCustomElementName({ name: name });
    }
    else if (existingElement) {
    }
    else if (!ignore$$1) {
        defineCustomElement({ name: name, constructor: constructor, ignore: true });
    }
    else {
        throw new Error(unsupportedFeature + ": Custom Elements - " + name);
    }
}

var pause = (function (_a) {
    var _b = _a.milliseconds, milliseconds = _b === void 0 ? 1000 : _b;
    return new Promise(function (resolve, reject) { return setTimeout(resolve, milliseconds); });
});

var dash$1 = StringConstant.dash;
function loadContainerStylesheets (params) {
    return new Promise(function (resolve, reject) {
        var requestIdleCallback = self.requestIdleCallback;
        if (requestIdleCallback) {
            requestIdleCallback(function () { return loadStylesheets(params, resolve).catch(reject); });
        }
        else {
            setTimeout(function () { return loadStylesheets(params, resolve).catch(reject); }, 0);
        }
    });
}
function loadStylesheets(params, resolve) {
    return __awaiter(this, void 0, void 0, function () {
        var container, name, styles, stylesheets, styleElements;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    container = params.container, name = params.name;
                    styles = Array
                        .from(container.content.querySelectorAll(Selector.style))
                        .map(function (style, index) { return ({
                        name: [
                            name,
                            ScriptNameSuffix.style,
                            index++
                        ].join(dash$1),
                        css: style.innerHTML
                    }); });
                    stylesheets = Array
                        .from(container.content.querySelectorAll(Selector.stylesheet))
                        .map(function (stylesheet, index) { return ({
                        name: [
                            name,
                            ScriptNameSuffix.stylesheet,
                            index++
                        ].join(dash$1),
                        href: stylesheet.href
                    }); });
                    return [4 /*yield*/, Promise.all(styles.map(loadScript).concat(stylesheets.map(loadScript)))];
                case 1:
                    styleElements = _a.sent();
                    resolve(styleElements);
                    return [2 /*return*/];
            }
        });
    });
}

var noElementName = ErrorMessage.noElementName, noTemplate = ErrorMessage.noTemplate, noElementForSelector = ErrorMessage.noElementForSelector;
function getElementFromTemplate (params) {
    return __awaiter(this, void 0, void 0, function () {
        var name, template, loadStylesheets, selector$$1, container, element, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    name = params.name, template = params.template, loadStylesheets = params.loadStylesheets, selector$$1 = params.selector;
                    container = name && template && document.createElement(TagName.template);
                    element = null;
                    if (!name) {
                        throw new Error(noElementName);
                    }
                    else if (!template) {
                        throw new Error(noTemplate);
                    }
                    if (!container) return [3 /*break*/, 3];
                    container.innerHTML = template;
                    element = selector$$1 && container.content.firstElementChild && container.content.firstElementChild.querySelector(selector$$1)
                        || container.content.firstElementChild;
                    _a = loadStylesheets && element;
                    if (!_a) return [3 /*break*/, 2];
                    return [4 /*yield*/, loadContainerStylesheets(__assign({}, params, { container: container }))];
                case 1:
                    _a = (_b.sent());
                    _b.label = 2;
                case 2:
                    _b.label = 3;
                case 3:
                    if (!element) {
                        throw new Error(noElementForSelector);
                    }
                    element.dataset.name = name;
                    return [2 /*return*/, element];
            }
        });
    });
}

var noElementName$1 = ErrorMessage.noElementName, noElementSelector = ErrorMessage.noElementSelector, noTemplateUrl = ErrorMessage.noTemplateUrl, noTemplateForUrl = ErrorMessage.noTemplateForUrl, noElementForSelector$1 = ErrorMessage.noElementForSelector;
function getElementFromUrl (params) {
    return __awaiter(this, void 0, void 0, function () {
        var name, url, selector$$1, loadStylesheets, head, template, _a, container, element, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    name = params.name, url = params.url, selector$$1 = params.selector, loadStylesheets = params.loadStylesheets;
                    head = document.head;
                    _a = name && selector$$1 && url;
                    if (!_a) return [3 /*break*/, 2];
                    return [4 /*yield*/, fetch(url)
                            .then(function (response) { return response.text(); })];
                case 1:
                    _a = (_c.sent());
                    _c.label = 2;
                case 2:
                    template = _a;
                    container = template && document.createElement(TagName.template);
                    element = null;
                    if (!name) {
                        throw new Error(noElementName$1);
                    }
                    else if (!selector$$1) {
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
                    element = container.content.querySelector(selector$$1);
                    _b = loadStylesheets && element;
                    if (!_b) return [3 /*break*/, 4];
                    return [4 /*yield*/, loadContainerStylesheets(__assign({}, params, { container: container }))];
                case 3:
                    _b = (_c.sent());
                    _c.label = 4;
                case 4:
                    _c.label = 5;
                case 5:
                    if (!element) {
                        throw new Error(noElementForSelector$1);
                    }
                    element.setAttribute('dataset-name', name);
                    return [2 /*return*/, element];
            }
        });
    });
}

var selector$1 = Selector.script;
function getElement (params) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    var requestIdleCallback = self.requestIdleCallback;
                    if (requestIdleCallback) {
                        requestIdleCallback(function () { return getElement$1(params, resolve).catch(reject); });
                    }
                    else {
                        setTimeout(function () { return getElement$1(params, resolve).catch(reject); }, 0);
                    }
                })];
        });
    });
}
function getElement$1(params, resolve) {
    return __awaiter(this, void 0, void 0, function () {
        var element, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!params.url) return [3 /*break*/, 2];
                    return [4 /*yield*/, getElementFromUrl(params)];
                case 1:
                    element = _b.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, getElementFromTemplate(params)];
                case 3:
                    element = _b.sent();
                    _b.label = 4;
                case 4:
                    _a = element;
                    if (!_a) return [3 /*break*/, 6];
                    return [4 /*yield*/, removeScripts({ selector: selector$1, parent: element })];
                case 5:
                    _a = (_b.sent());
                    _b.label = 6;
                case 6:
                    resolve(element);
                    return [2 /*return*/];
            }
        });
    });
}

var timeout = TimeoutDuration.webComponent;
function queue (_a) {
    var key = _a.key, resolve = _a.resolve, reject = _a.reject;
    var VamtigerBrowserMethod = self.VamtigerBrowserMethod;
    var queueEntry = {
        resolve: resolve,
        reject: reject
    };
    var messageQueue = VamtigerBrowserMethod.messageQueue;
    var queue;
    !messageQueue.has(key) && messageQueue.set(key, new Set());
    queue = messageQueue.get(key);
    queue && queue.add(queueEntry);
    setTimeout(function () { return handleExpiredQueueEntry({ key: key, queueEntry: queueEntry }); }, timeout);
}
function handleExpiredQueueEntry(_a) {
    var key = _a.key, queueEntry = _a.queueEntry;
    var VamtigerBrowserMethod = self.VamtigerBrowserMethod;
    var messageQueue = VamtigerBrowserMethod.messageQueue;
    var queue = messageQueue.get(key);
    if (queue) {
        queue.has(queueEntry) && queue.delete(queueEntry);
        !queue.size && messageQueue.delete(key);
    }
}

function dequeue (_a) {
    var key = _a.key, data = _a.data;
    var VamtigerBrowserMethod = self.VamtigerBrowserMethod;
    var messageQueue = VamtigerBrowserMethod.messageQueue;
    var queue = messageQueue.get(key) || new Set();
    Array.from(queue).forEach(function (queueEntry) {
        queueEntry.resolve(data);
        queue.delete(queueEntry);
    });
}

var action = MessageAction.getWebComponentData;
var parse$2 = JSON.parse;
function getWebComponentData (params) {
    var VamtigerBrowserMethod = self.VamtigerBrowserMethod;
    var support = VamtigerBrowserMethod.support, workerSupport = VamtigerBrowserMethod.workerSupport, worker = VamtigerBrowserMethod.worker;
    if (isWindow()) {
        if (worker && workerSupport && workerSupport.indexedDbIsAccessible) {
            return getWebComponentDataWindowWorker(params);
        }
        else if (worker && support && support.indexedDbIsAccessible) {
            getWebComponentDataWindow(params);
        }
        else {
            getWebComponentDataHead(params);
        }
    }
    else if (isWorker()) {
        return getWebComponentDataWorker(params);
    }
}
function getWebComponentDataWindow(_a) {
    var key = _a.key;
    return __awaiter(this, void 0, void 0, function () {
        var data, dequeueParams;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, getWebComponentData$1({ key: key })];
                case 1:
                    data = _b.sent();
                    dequeueParams = data && {
                        key: key,
                        data: data
                    };
                    if (dequeueParams) {
                        dequeue(dequeueParams);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function getWebComponentDataWindowWorker(_a) {
    var key = _a.key;
    return __awaiter(this, void 0, void 0, function () {
        var message;
        return __generator(this, function (_b) {
            message = {
                action: action,
                params: {
                    key: key
                }
            };
            sendMessage(message);
            return [2 /*return*/];
        });
    });
}
function getWebComponentDataWorker(_a) {
    var key = _a.key;
    return __awaiter(this, void 0, void 0, function () {
        var webComponent, message;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, getWebComponentData$1({ key: key })];
                case 1:
                    webComponent = _b.sent();
                    message = webComponent && webComponent.jsonLd && webComponent.jsonLd.length && {
                        action: MessageAction.dequeue,
                        params: {
                            key: key,
                            data: {
                                jsonLd: webComponent.jsonLd,
                                json: webComponent.json
                            }
                        }
                    };
                    return [2 /*return*/, message];
            }
        });
    });
}
function getWebComponentData$1(_a) {
    var key = _a.key;
    return __awaiter(this, void 0, void 0, function () {
        var webComponentData;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, getData({
                        storeName: DbStoreName.webComponent,
                        keyPath: DbKeyPath.webComponent,
                        key: key
                    })];
                case 1:
                    webComponentData = _b.sent();
                    return [2 /*return*/, webComponentData];
            }
        });
    });
}
function getWebComponentDataHead(_a) {
    var key = _a.key;
    var head = document.head;
    var jsonLdSelector = "script[data-json-ld=\"" + key + "\"][type=\"" + ScriptType.jsonld + "\"]";
    var jsonSelector = "script[data-json-ld=\"" + key + "\"][type=\"" + ScriptType.json + "\"]";
    var jsonLdScripts = Array.from(head.querySelectorAll(jsonLdSelector));
    var jsonScript = head.querySelector(jsonSelector);
    var data = jsonLdScripts.length && {
        jsonLd: jsonLdScripts.map(function (_a) {
            var innerHTML = _a.innerHTML;
            return innerHTML && parse$2(innerHTML);
        }),
        json: jsonScript && jsonScript.innerHTML && parse$2(jsonScript.innerHTML) || {}
    };
    var dequeueParams = data && {
        key: key,
        data: data
    };
    dequeueParams && dequeue(dequeueParams);
}

var storeName$2 = DbStoreName.webComponent;
var keyPath$2 = DbKeyPath.webComponent;
function saveWebComponentData (params) {
    if (isWindow()) {
        return saveWebComponentDataWindow(params);
    }
    else if (isWorker()) {
        return saveWebComponentDataWorker(params);
    }
}
function saveWebComponentDataWindow(params) {
    return __awaiter(this, void 0, void 0, function () {
        var VamtigerBrowserMethod, support, workerSupport, key, selector$$1, data, message;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    VamtigerBrowserMethod = self.VamtigerBrowserMethod;
                    support = VamtigerBrowserMethod.support, workerSupport = VamtigerBrowserMethod.workerSupport;
                    key = params.url;
                    selector$$1 = getSelector({ url: key });
                    data = getData$1(params);
                    message = data && {
                        action: MessageAction.saveWebComponentData,
                        params: data
                    };
                    if (!(workerSupport && workerSupport.indexedDbIsAccessible)) return [3 /*break*/, 1];
                    message && sendMessage(message);
                    return [3 /*break*/, 5];
                case 1:
                    if (!(support && support.indexedDbIsAccessible)) return [3 /*break*/, 5];
                    return [4 /*yield*/, saveWebComponentDataIndexDb(params)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, getWebComponentData({ key: key })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, removeRedundantScripts({ selector: selector$$1 })];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    });
}
function saveWebComponentDataWorker(params) {
    return __awaiter(this, void 0, void 0, function () {
        var url, selector$$1, saveData, getWebComponentDataMessage, removeRedundantScriptsMessage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = params.url;
                    selector$$1 = getSelector({ url: url });
                    return [4 /*yield*/, saveWebComponentDataIndexDb(params)];
                case 1:
                    saveData = _a.sent();
                    getWebComponentDataMessage = {
                        action: MessageAction.getWebComponentData,
                        params: {
                            key: url
                        }
                    };
                    removeRedundantScriptsMessage = {
                        action: MessageAction.removeRedundantScripts,
                        params: {
                            selector: selector$$1
                        }
                    };
                    sendMessage(getWebComponentDataMessage);
                    sendMessage(removeRedundantScriptsMessage);
                    return [2 /*return*/];
            }
        });
    });
}
function saveWebComponentDataIndexDb(params) {
    return __awaiter(this, void 0, void 0, function () {
        var data, saveParams, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    data = getData$1(params);
                    saveParams = data && {
                        storeName: storeName$2,
                        keyPath: keyPath$2,
                        data: data,
                        successAction: MessageAction.getWebComponentData
                    };
                    _a = saveParams;
                    if (!_a) return [3 /*break*/, 2];
                    return [4 /*yield*/, save(saveParams)];
                case 1:
                    _a = (_b.sent());
                    _b.label = 2;
                case 2:
                    return [2 /*return*/];
            }
        });
    });
}
function getData$1(_a) {
    var url = _a.url, _b = _a.created, created = _b === void 0 ? new Date().getTime() : _b, json = _a.json, jsonLd = _a.jsonLd;
    var data = url && jsonLd && {
        url: url,
        created: created,
        jsonLd: jsonLd,
        json: json
    };
    return data;
}
function getSelector(_a) {
    var url = _a.url;
    var selector$$1 = "script[type=\"application/json\"][data-json-ld=\"" + url + "\"]";
    return selector$$1;
}

var parse$3 = JSON.parse, stringify$1 = JSON.stringify;
var emptyJsonLd = {
    jsonLd: [],
    json: {}
};
function loadWebComponentData (params) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (isWindow() && loadWebComponentData$1(params))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function loadWebComponentData$1(_a) {
    var url = _a.url, loadJsonJsonLd = _a.loadJsonJsonLd;
    return __awaiter(this, void 0, void 0, function () {
        var VamtigerBrowserMethod, worker, head, jsonLdSelector, _b, jsonLd, json, jsonJsonLdData, _c, params, jsonLdScript, removeScriptParams;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    VamtigerBrowserMethod = self.VamtigerBrowserMethod;
                    worker = VamtigerBrowserMethod.worker;
                    head = document.head;
                    jsonLdSelector = "script[type=\"application/ld+json\"][data-json-ld=\"" + url + "\"]";
                    return [4 /*yield*/, getWebComponentData$2({ url: url })];
                case 1:
                    _b = _d.sent(), jsonLd = _b.jsonLd, json = _b.json;
                    _c = loadJsonJsonLd && json && Array.isArray(json.jsonLd);
                    if (!_c) return [3 /*break*/, 3];
                    return [4 /*yield*/, Promise.all(json.jsonLd.map(getJsonJsonLd))];
                case 2:
                    _c = (_d.sent());
                    _d.label = 3;
                case 3:
                    jsonJsonLdData = _c;
                    params = jsonLd && {
                        url: url,
                        created: new Date().getTime(),
                        jsonLd: jsonLd,
                        json: json
                    };
                    jsonLdScript = head.querySelector(jsonLdSelector);
                    removeScriptParams = {
                        selector: "[type=\"" + ScriptType.json + "\"][data-name=\"" + url + "\"]"
                    };
                    if (!jsonJsonLdData) return [3 /*break*/, 6];
                    jsonJsonLdData.forEach(function (currentJsonJsonLdData) { return currentJsonJsonLdData.forEach(function (_a) {
                        var index = _a.index, key = _a.key, data = _a.jsonLd;
                        if (jsonLd && Array.isArray(jsonLd) && jsonLd[index] && key && jsonLd[index][key] === true && data) {
                            jsonLd[index][key] = data;
                        }
                    }); });
                    if (!(jsonLdScript && jsonLd)) return [3 /*break*/, 6];
                    head.removeChild(jsonLdScript);
                    return [4 /*yield*/, Promise.all(jsonLd.map(function (currentJsonLd) { return loadScript({
                            name: url,
                            json: stringify$1(currentJsonLd),
                            jsonld: true
                        }); }))];
                case 4:
                    _d.sent();
                    return [4 /*yield*/, removeRedundantScripts(removeScriptParams)];
                case 5:
                    _d.sent();
                    _d.label = 6;
                case 6:
                    if (worker && params) {
                        saveWebComponentData(params);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function getJsonJsonLd(_a) {
    var index = _a.index, fields = _a.fields;
    return __awaiter(this, void 0, void 0, function () {
        var keys, jsonJsonLd;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    keys = Object.keys(fields);
                    return [4 /*yield*/, Promise.all(keys.map(function (key) { return getFieldData({ key: key, urls: fields[key] }).then(function (fieldData) { return (__assign({ index: index }, fieldData)); }); }))];
                case 1:
                    jsonJsonLd = _b.sent();
                    return [2 /*return*/, jsonJsonLd];
            }
        });
    });
}
function getFieldData(_a) {
    var currentUrls = _a.urls, key = _a.key;
    return __awaiter(this, void 0, void 0, function () {
        var loadJsonJsonLd, urls, fieldData, data;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    loadJsonJsonLd = false;
                    urls = Array.isArray(currentUrls) && currentUrls.filter(function (url) { return typeof url === 'string'; }) || [];
                    return [4 /*yield*/, Promise.all(urls.map(function (url) { return getJsonLd({ jsonLd: url, loadJsonJsonLd: loadJsonJsonLd }); }))];
                case 1:
                    fieldData = _b.sent();
                    data = {
                        key: key,
                        jsonLd: []
                    };
                    fieldData.forEach(function (_a) {
                        var jsonLd = _a.jsonLd;
                        return jsonLd && jsonLd.forEach(function (currentJsonLd) { return currentJsonLd && data.jsonLd.push(currentJsonLd); });
                    });
                    return [2 /*return*/, data];
            }
        });
    });
}
function getWebComponentData$2(_a) {
    var url = _a.url;
    return __awaiter(this, void 0, void 0, function () {
        var head, selector$$1, jsonLdSelector, jsonSelector, existingScript, script, _b, scripts, _c, _d, jsonLdScripts, jsonScript, jsonLd, json, webComponentData, error_1;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 5, , 6]);
                    head = document.head;
                    selector$$1 = Selector.script + "[src=\"" + url + "\"]";
                    jsonLdSelector = "script[type=\"application/ld+json\"][data-json-ld=\"" + url + "\"]";
                    jsonSelector = "script[type=\"application/json\"][data-json-ld=\"" + url + "\"]";
                    existingScript = head.querySelector(selector$$1);
                    _b = !existingScript;
                    if (!_b) return [3 /*break*/, 2];
                    return [4 /*yield*/, loadScript({ src: url })];
                case 1:
                    _b = (_e.sent());
                    _e.label = 2;
                case 2:
                    script = _b;
                    _c = script;
                    if (!_c) return [3 /*break*/, 4];
                    return [4 /*yield*/, Promise.all([
                            Array
                                .from(head.querySelectorAll(jsonLdSelector))
                                .map(function (_a) {
                                var innerHTML = _a.innerHTML;
                                return innerHTML;
                            }),
                            head.querySelector(jsonSelector)
                        ])];
                case 3:
                    _c = (_e.sent());
                    _e.label = 4;
                case 4:
                    scripts = _c;
                    _d = scripts || [undefined, undefined], jsonLdScripts = _d[0], jsonScript = _d[1];
                    jsonLd = jsonLdScripts && jsonLdScripts.map(function (jsonLdScript) { return parse$3(jsonLdScript); });
                    json = jsonScript && parse$3(jsonScript.innerHTML) || {};
                    webComponentData = {
                        jsonLd: jsonLd,
                        json: json
                    };
                    return [2 /*return*/, webComponentData];
                case 5:
                    error_1 = _e.sent();
                    console.error(error_1);
                    return [2 /*return*/, emptyJsonLd];
                case 6: return [2 /*return*/];
            }
        });
    });
}

function getJsonLd (_a) {
    var _this = this;
    var url = _a.jsonLd, _b = _a.loadJsonJsonLd, loadJsonJsonLd = _b === void 0 ? true : _b;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var queueParams, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    queueParams = {
                        key: url,
                        resolve: resolve,
                        reject: reject
                    };
                    queue(queueParams);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, loadWebComponentData({ url: url, loadJsonJsonLd: loadJsonJsonLd })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4:
                    getWebComponentData({ key: url });
                    return [2 /*return*/];
            }
        });
    }); });
}

function isTextMode () {
    var documentElement = document.documentElement;
    var isTextMode = documentElement.dataset.hasOwnProperty('vamtigerTextMode');
    return isTextMode;
}

var src = Dependency.jsonLdViewer;
var jsonLdViewerElement;
function viewJsonLd (params) {
    return __awaiter(this, void 0, void 0, function () {
        var textMode;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    textMode = isTextMode();
                    if (!textMode) return [3 /*break*/, 2];
                    return [4 /*yield*/, viewJsonLd$1(params)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
}
function viewJsonLd$1(_a) {
    var jsonLd = _a.jsonLd;
    return __awaiter(this, void 0, void 0, function () {
        var jsonLdViewerScript, jsonLdViewer, dataset;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, loadScript({ name: src, src: src })];
                case 1:
                    jsonLdViewerScript = _b.sent();
                    jsonLdViewer = getJsonLdViewer();
                    dataset = jsonLdViewer.dataset;
                    dataset.jsonLd = jsonLd;
                    return [2 /*return*/];
            }
        });
    });
}
function getJsonLdViewer() {
    var body = document.body;
    var jsonLdViewer = jsonLdViewerElement || document.createElement('vamtiger-json-ld-viewer');
    if (!jsonLdViewerElement) {
        jsonLdViewerElement = jsonLdViewer;
        body.appendChild(jsonLdViewer);
    }
    return jsonLdViewer;
}

var noJsonLdParameter = ErrorMessage.noJsonLdParameter;
function getData$2 (params) {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var requestIdleCallback, textMode, jsonLd;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    requestIdleCallback = self.requestIdleCallback;
                    textMode = params.textMode, jsonLd = params.jsonLd;
                    if (!jsonLd) return [3 /*break*/, 3];
                    if (!textMode) return [3 /*break*/, 2];
                    return [4 /*yield*/, viewJsonLd(params)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (requestIdleCallback) {
                        requestIdleCallback(function () { return getJsonLd(params).then(resolve).catch(reject); });
                    }
                    else {
                        setTimeout(function () { return getJsonLd(params).then(resolve).catch(reject); }, 0);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    reject(new Error(noJsonLdParameter));
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); });
}

function getEnvironment () {
    var environment = self.hasOwnProperty('WorkerGlobalScope')
        && Environment.worker
        || Environment.window;
    return environment;
}

var parse$4 = JSON.parse;
var ignoreMessage = {
    action: MessageAction.ignore,
    params: {}
};
var textDecoder = new TextDecoder();
function getMessageData (event) {
    var message;
    try {
        message = getMessageData$1(event) || ignoreMessage;
    }
    catch (error) {
        message = ignoreMessage;
    }
    return message;
}
function getMessageData$1(_a) {
    var message = _a.data;
    var messageData = typeof message === 'string' && parse$4(message)
        || message instanceof Uint8Array && parse$4(textDecoder.decode(message));
    if (typeof messageData.params === 'string') {
        messageData.params = parse$4(messageData.params);
    }
    return messageData;
}

var storeName$3 = DbStoreName.support;
function saveSupport (params) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            isWindow() && saveSupportDataWindow(params);
            isWorker() && saveSupportDataWorker(params);
            return [2 /*return*/];
        });
    });
}
function saveSupportDataWindow(params) {
    var VamtigerBrowserMethod = self.VamtigerBrowserMethod;
    var workerSupport = VamtigerBrowserMethod.workerSupport;
    var message = workerSupport && workerSupport.indexedDbIsAccessible && {
        action: MessageAction.saveSupport,
        params: params
    };
    if (message) {
        sendMessage(message);
    }
    else {
        saveSupportDataIndexDb(params);
    }
}
function saveSupportDataWorker(params) {
    saveSupportDataIndexDb(params);
}
function saveSupportDataIndexDb(params) {
    var environment = params.environment;
    var saveParams = environment && {
        storeName: storeName$3,
        keyPath: DbKeyPath.support,
        data: __assign({ environment: environment }, params)
    };
    saveParams && save(saveParams);
}

var keyPath$3 = DbKeyPath.support;
var storeName$4 = DbStoreName.support;
function setSupport () {
    return __awaiter(this, void 0, void 0, function () {
        var VamtigerBrowserMethod, localStorage, indexedDB, indexedDbIsAccessible, support;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    VamtigerBrowserMethod = self.VamtigerBrowserMethod, localStorage = self.localStorage, indexedDB = self.indexedDB;
                    return [4 /*yield*/, Promise.all([
                            indexDbAccessible()
                        ])];
                case 1:
                    indexedDbIsAccessible = (_a.sent())[0];
                    support = {
                        localStorage: localStorage ? true : false,
                        indexedDb: indexedDB ? true : false,
                        indexedDbIsAccessible: indexedDbIsAccessible,
                        worker: self.hasOwnProperty('Worker') ? true : false,
                        sharedWorker: self.hasOwnProperty('SharedWorker'),
                        textEncoder: self.hasOwnProperty('TextEncoder'),
                        textDecoder: self.hasOwnProperty('TextDecoder')
                    };
                    VamtigerBrowserMethod.support = support;
                    isWorker() && sendWorkerSupport();
                    return [2 /*return*/];
            }
        });
    });
}
function indexDbAccessible() {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var indexedDbIsAccessible, resolved, environment, timeout;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    indexedDbIsAccessible = false;
                    resolved = false;
                    environment = Environment.worker;
                    timeout = setTimeout(function () { return !resolved && resolve(indexedDbIsAccessible); }, TimeoutDuration.indexDbIsAccessible);
                    return [4 /*yield*/, getData({
                            storeName: storeName$4,
                            keyPath: keyPath$3,
                            key: environment
                        })];
                case 1:
                    _a.sent();
                    indexedDbIsAccessible = true;
                    resolved = true;
                    resolve(indexedDbIsAccessible);
                    return [2 /*return*/];
            }
        });
    }); });
}
function setWorkerSupport(workerSupport) {
    return __awaiter(this, void 0, void 0, function () {
        var VamtigerBrowserMethod, support, environment;
        return __generator(this, function (_a) {
            VamtigerBrowserMethod = self.VamtigerBrowserMethod;
            support = VamtigerBrowserMethod.support, environment = VamtigerBrowserMethod.environment;
            VamtigerBrowserMethod.workerSupport = workerSupport;
            support && saveSupport(__assign({ environment: environment }, support));
            workerSupport && saveSupport(__assign({ environment: Environment.worker }, workerSupport));
            return [2 /*return*/];
        });
    });
}
function sendWorkerSupport() {
    var VamtigerBrowserMethod = self.VamtigerBrowserMethod;
    var message = {
        action: MessageAction.setWorkerSupport,
        params: VamtigerBrowserMethod.support || {}
    };
    sendMessage(message);
}

var logMessage = 'Message Ignored';
function ignoreMessage$1 (params) {
    console.log(logMessage);
    console.warn(params);
}

var _a;
var action$1 = (_a = {}, _a[MessageAction.ignore] = ignoreMessage$1, _a[MessageAction.removeRedundantScripts] = removeRedundantScripts, _a[MessageAction.setWorkerSupport] = setWorkerSupport, _a[MessageAction.saveWebComponentData] = saveWebComponentData, _a[MessageAction.getWebComponentData] = getWebComponentData, _a[MessageAction.dequeue] = dequeue, _a[MessageAction.loadWebComponentData] = loadWebComponentData, _a[MessageAction.saveSupport] = saveSupport, _a[MessageAction.saveCustomElementName] = saveCustomElementName, _a[MessageAction.getTextModeCss] = getTextModeCss, _a[MessageAction.loadScript] = loadScript$2, _a);
function handleMessage (event) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, actionName, params, currentAction, response;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = getMessageData(event) || { action: MessageAction.ignore, params: {} }, actionName = _a.action, params = _a.params;
                    currentAction = action$1[actionName];
                    return [4 /*yield*/, currentAction(params)];
                case 1:
                    response = _b.sent();
                    response && sendMessage(response);
                    return [2 /*return*/];
            }
        });
    });
}

function isLocalHost () {
    var location = window.location;
    var isLocalHost = HostName.localHost === location.hostname;
    return isLocalHost;
}

var url = LocalHostRelativePath.vamtigerBrowserMethod;
function getLocalHostWorkerUrl () {
    return __awaiter(this, void 0, void 0, function () {
        var validUrl, _a, localHostRelativeUrl;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = isLocalHost();
                    if (!_a) return [3 /*break*/, 2];
                    return [4 /*yield*/, fetch(url)
                            .then(function (response) { return response.ok; })
                            .catch(function (error) { return ''; })];
                case 1:
                    _a = (_b.sent());
                    _b.label = 2;
                case 2:
                    validUrl = _a;
                    localHostRelativeUrl = validUrl && url || '';
                    return [2 /*return*/, localHostRelativeUrl];
            }
        });
    });
}

var stringify$2 = JSON.stringify;
var params = {
    type: ScriptType.js
};
var newline = StringConstant.newline;
var worker;
function getWorker () {
    return __awaiter(this, void 0, void 0, function () {
        var localHostWorkerUrl, head, createObjectURL, workderScript, workerDependecies, workerScripts, workerBlob, workerUrl, currentWorker;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getLocalHostWorkerUrl()];
                case 1:
                    localHostWorkerUrl = _a.sent();
                    head = document.head;
                    createObjectURL = URL.createObjectURL;
                    workderScript = head.querySelector(Selector.vamtigerBrowserMethod);
                    workerDependecies = (Array.from(head.querySelectorAll(Selector.workderDependency)) || [])
                        .map(function (_a) {
                        var innerHTML = _a.innerHTML;
                        return innerHTML;
                    })
                        .filter(function (script) { return script; });
                    workerScripts = workerDependecies.concat([
                        workderScript && workderScript.innerHTML || ''
                    ]).filter(function (script) { return script; }).join(newline.repeat(2));
                    workerBlob = workerScripts && workerScripts.length && new Blob([workerScripts], params);
                    workerUrl = workerBlob && createObjectURL && createObjectURL(workerBlob);
                    currentWorker = workerUrl && new Worker(localHostWorkerUrl || workerUrl);
                    if (currentWorker) {
                        currentWorker.addEventListener('message', handleMessage);
                        currentWorker.addEventListener('error', handleError$3);
                    }
                    worker = worker || currentWorker;
                    return [2 /*return*/, worker];
            }
        });
    });
}
function handleError$3(event) {
    var keys = Object.keys(event);
    keys.forEach(function (key) { return console.error(typeof event[key] === 'string' || stringify$2(event[key])); });
}

var IntersectionObserver = self.IntersectionObserver, requestIdleCallback$2 = self.requestIdleCallback;
var defaultObserver = IntersectionObserver && new IntersectionObserver(handleIntersect, intersectionObserver);
function getIntersectionObserver () {
    return defaultObserver;
}
function handleIntersect(entries, observer) {
    entries.forEach(function (entry) {
        if (requestIdleCallback$2) {
            requestIdleCallback$2(function () { return handleIntersectElement(entry); });
        }
        else {
            setTimeout(function () { return handleIntersectElement(entry); }, 0);
        }
    });
}
function handleIntersectElement(entry) {
    var _a = entry, isIntersecting = _a.isIntersecting, intersectionRatio = _a.intersectionRatio, element = _a.target, isVisible = _a.isVisible;
    var dataset = element.dataset;
    if (isIntersecting) {
        dataset[DataAttribute.visible] = intersectionRatio.toString();
    }
    else {
        delete dataset[DataAttribute.visible];
    }
}

var nothing$5 = StringConstant.nothing;
function setupWindow () {
    isWindow() && setupWindow$1();
}
function setupWindow$1() {
    return __awaiter(this, void 0, void 0, function () {
        var head, VamtigerBrowserMethod, _a, metaElement, customeElementMetaElement, textMode, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    head = document.head;
                    VamtigerBrowserMethod = self.VamtigerBrowserMethod;
                    _a = VamtigerBrowserMethod.metaElement, metaElement = _a === void 0 ? document.createElement('meta') : _a;
                    customeElementMetaElement = document.createElement('meta');
                    textMode = isTextMode();
                    customeElementMetaElement.dataset[DataAttribute.customElementName] = nothing$5;
                    metaElement.id = ElementId.metaElement;
                    metaElement.appendChild(customeElementMetaElement);
                    head.appendChild(metaElement);
                    VamtigerBrowserMethod.metaElement = metaElement;
                    _b = VamtigerBrowserMethod;
                    return [4 /*yield*/, getWorker()];
                case 1:
                    _b.worker = _c.sent();
                    VamtigerBrowserMethod.textMode = textMode;
                    VamtigerBrowserMethod.intersectionObserver = getIntersectionObserver();
                    return [2 /*return*/];
            }
        });
    });
}

function setupWorker () {
    isWorker() && setupWorker$1();
}
function setupWorker$1() {
    addEventListener('message', handleMessage);
    return removeRedundantScripts({
        selector: selector.redundantScripts
    });
}

var html = "<figcaption data-linked-data-caption></figcaption> <span data-linked-data-caption-element></span> <a></a>";

var template;
var templateHtml;
var document$1 = self.document;
var nothing$6 = StringConstant.nothing;
if (document$1) {
    template = document$1.createElement('template');
    templateHtml = [
        html
    ].join(nothing$6);
    template.innerHTML = templateHtml;
}
var getTemplate = (function (params) {
    var selector$$1 = params.selector, _a = params.attributes, attributes = _a === void 0 ? {} : _a, _b = params.properties, properties = _b === void 0 ? {} : _b;
    var attributesKeys = Object.keys(attributes);
    var templateElement = template.content.querySelector(selector$$1);
    var currentTemplate = templateElement && templateElement.cloneNode(true);
    if (currentTemplate) {
        Object.assign(currentTemplate, properties);
        attributesKeys.forEach(function (key) { return attributes[key] && currentTemplate.setAttribute(key, attributes[key] || ''); });
    }
    return currentTemplate;
});

var nothing$7 = StringConstant.nothing, slash$1 = StringConstant.slash;
function getMicrodataCaption (_a) {
    var imageData = _a.imageData, fieldKey = _a.fieldKey;
    var field = imageData[fieldKey];
    var fieldData = Array.isArray(field) && field || [field] || [];
    var caption = field && getTemplate({
        selector: Selector.linkedDataCaption,
        attributes: {
            itemprop: fieldKey
        }
    });
    var itemtype;
    var currentCaption;
    var currentProducerCaptionElements;
    fieldData.forEach(function (currentFieldData) {
        if (currentFieldData) {
            itemtype = currentFieldData['@context'] && currentFieldData['@type'] && [
                currentFieldData['@context'],
                currentFieldData['@type']
            ].join(slash$1);
            currentCaption = getTemplate({
                selector: Selector.linkedDataCaption
            });
            if (currentCaption) {
                currentCaption.setAttribute('itemscope', nothing$7);
                itemtype && currentCaption.setAttribute('itemtype', itemtype);
                currentProducerCaptionElements = [
                    currentFieldData.name && getTemplate({
                        selector: Selector.linkedDataCaptionElement,
                        properties: {
                            innerHTML: currentFieldData.name
                        },
                        attributes: {
                            itemprop: 'name'
                        }
                    }),
                    currentFieldData.description && getTemplate({
                        selector: Selector.linkedDataCaptionElement,
                        properties: {
                            innerHTML: currentFieldData.description
                        },
                        attributes: {
                            itemprop: 'description'
                        }
                    }),
                    currentFieldData.url && getTemplate({
                        selector: Selector.a,
                        properties: {
                            innerHTML: currentFieldData.name || currentFieldData.url
                        },
                        attributes: {
                            itemprop: 'url',
                            href: currentFieldData.url
                        }
                    })
                ];
                currentProducerCaptionElements.forEach(function (currentElement) { return currentElement && currentCaption && currentCaption.appendChild(currentElement); });
                caption && caption.appendChild(currentCaption);
            }
        }
    });
    return caption;
}

function getTabLink (_a) {
    var href = _a.href, text = _a.text;
    var link = href && text && "<a href=\"" + href + "\" target=\"_blank\">" + text + "</a>" || '';
    return link;
}

function getEmailLink (_a) {
    var href = _a.href, text = _a.text;
    var link = href && text && "<a href=\"mailto:" + href + "\">" + text + "</a>" || '';
    return link;
}

var requestIdleCallback$3 = self.requestIdleCallback;
var nothing$8 = StringConstant.nothing, slash$2 = StringConstant.slash;
var leadingAt = regex.leadingAt, remoteUrl$1 = regex.remoteUrl, email = regex.email;
function getJsonLdArray (params) {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (requestIdleCallback$3) {
                requestIdleCallback$3(function () { return getJsonLdArray$1(params).then(resolve).catch(reject); });
            }
            else {
                setTimeout(function () { return getJsonLdArray$1(params).then(resolve).catch(reject); }, 0);
            }
            return [2 /*return*/];
        });
    }); });
}
function getJsonLdArray$1(_a) {
    var currentJsonLd = _a.jsonLd;
    return __awaiter(this, void 0, void 0, function () {
        var jsonLd, keys, entries, jsonLdArray;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    jsonLd = getJsonLd$1({
                        jsonLd: currentJsonLd
                    });
                    keys = Object.keys(jsonLd);
                    return [4 /*yield*/, Promise.all(keys.map(function (key) { return getEntry({ key: key, value: jsonLd[key] }); }))];
                case 1:
                    entries = _b.sent();
                    jsonLdArray = [];
                    entries.forEach(function (entries) { return entries.forEach(function (entry) { return jsonLdArray.push(entry); }); });
                    return [2 /*return*/, jsonLdArray];
            }
        });
    });
}
function getJsonLd$1(_a) {
    var jsonLd = _a.jsonLd;
    var _ = self._;
    var startCase = _.startCase;
    var _b = jsonLd["@context"], context = _b === void 0 ? undefined : _b, _c = jsonLd["@type"], type = _c === void 0 ? undefined : _c;
    var typeLinkHref = context && type && [
        context,
        type
    ].join(slash$2);
    var typeLinkText = type && startCase(type);
    var typeLink = getTabLink({
        href: typeLinkHref,
        text: typeLinkText
    });
    if (typeLink) {
        jsonLd['@type'] = typeLink;
    }
    return jsonLd;
}
function getEntry(_a) {
    var key = _a.key, value = _a.value;
    return __awaiter(this, void 0, void 0, function () {
        var _, startCase, entryValue, valueArray, nestedEntries, _b, entry;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _ = self._;
                    startCase = _.startCase;
                    entryValue = jsonLdEntryValueType.has(typeof value) && value;
                    valueArray = Array.isArray(value) && value || typeof value === 'object' && [value];
                    _b = valueArray;
                    if (!_b) return [3 /*break*/, 2];
                    return [4 /*yield*/, Promise.all(valueArray.map(function (jsonLd) { return getJsonLdArray$1({ jsonLd: jsonLd }); }))];
                case 1:
                    _b = (_c.sent());
                    _c.label = 2;
                case 2:
                    nestedEntries = _b;
                    entry = [[startCase(key.replace(leadingAt, nothing$8)), entryValue && (key.match(email) && getEmailLink({ href: entryValue.toString(), text: entryValue.toString() }) || getEntryValue(entryValue)) || nothing$8]];
                    nestedEntries && nestedEntries.forEach(function (nestedEntry) { return nestedEntry.forEach(function (currentNestedEntry) { return entry.push(currentNestedEntry); }); });
                    return [2 /*return*/, entry];
            }
        });
    });
}
function getEntryValue(value) {
    var valueString = value.toString().trim();
    var linkHref = valueString.match(remoteUrl$1) && valueString;
    var linkText = linkHref && valueString && valueString.split(slash$2).pop();
    var link = linkHref && linkText && getTabLink({
        href: linkHref,
        text: linkText
    });
    var entryValue = link || valueString;
    return entryValue;
}

function loadDependencies () {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = isWindow();
                    if (!_a) return [3 /*break*/, 2];
                    return [4 /*yield*/, loadDependencies$1()];
                case 1:
                    _a = (_b.sent());
                    _b.label = 2;
                case 2:
                    return [2 /*return*/];
            }
        });
    });
}
function loadDependencies$1() {
    return __awaiter(this, void 0, void 0, function () {
        var workerDependency, dependencies;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    workerDependency = true;
                    dependencies = getDependencies();
                    return [4 /*yield*/, Promise.all(dependencies.map(function (src) { return loadScript({ name: src, src: src, workerDependency: workerDependency }); }))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}

var eventParams = {
    bubbles: true
};
function dispatchEvent (params) {
    isWindow() && postWindowMessage(params);
}
function postWindowMessage(_a) {
    var eventName = _a.eventName, _b = _a.detail, detail = _b === void 0 ? {} : _b;
    var event = new CustomEvent(eventName, __assign({}, eventParams, { detail: detail }));
    self.dispatchEvent(event);
}

var environment = getEnvironment();
var vamtigerBrowserMethod = {
    loadScript: loadScript,
    loadScripts: loadScripts,
    loadScriptsSequentially: loadScriptsSequentially,
    loadShadowStylesheet: loadShadowStylesheet,
    defineCustomElement: defineCustomElement,
    pause: pause,
    getElement: getElement,
    getData: getData$2,
    getEnvironment: getEnvironment,
    environment: environment,
    messageQueue: new Map(),
    getMicrodataCaption: getMicrodataCaption,
    getJsonLdArray: getJsonLdArray
};
main().catch(handleError$4);
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var VamtigerBrowserMethod, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    VamtigerBrowserMethod = self.VamtigerBrowserMethod;
                    if (!!VamtigerBrowserMethod) return [3 /*break*/, 5];
                    self.VamtigerBrowserMethod = vamtigerBrowserMethod;
                    return [4 /*yield*/, loadDependencies()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, setSupport()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, setupWindow()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, setupWorker()];
                case 4:
                    _a.sent();
                    dispatchEvent({ eventName: EventName.vamtigerBrowserMethodReady });
                    _a.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_1 = _a.sent();
                    handleError$4(error_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function handleError$4(error) {
    console.error(error);
    throw error;
}

}());
//# sourceMappingURL=vamtiger-browser-method.js.map
