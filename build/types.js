"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib = require("../node_modules/tslib/tslib");
tslib;
var Environment;
(function (Environment) {
    Environment["window"] = "window";
    Environment["worker"] = "worker";
    Environment["serviceWorker"] = "serviceWorker";
    Environment["unknown"] = "unknown";
})(Environment = exports.Environment || (exports.Environment = {}));
var CacheName;
(function (CacheName) {
    CacheName["vamtigerBrowserMethod"] = "vamtiger-browser-method";
})(CacheName = exports.CacheName || (exports.CacheName = {}));
var EventName;
(function (EventName) {
    EventName["vamtigerBrowserMethodReady"] = "vamtigerBrowserMethodReady";
})(EventName = exports.EventName || (exports.EventName = {}));
var TimeoutDuration;
(function (TimeoutDuration) {
    TimeoutDuration[TimeoutDuration["webComponent"] = 5000] = "webComponent";
    TimeoutDuration[TimeoutDuration["indexDbIsAccessible"] = 100] = "indexDbIsAccessible";
})(TimeoutDuration = exports.TimeoutDuration || (exports.TimeoutDuration = {}));
var MessageQueueName;
(function (MessageQueueName) {
    MessageQueueName["webComponent"] = "webComponent";
})(MessageQueueName = exports.MessageQueueName || (exports.MessageQueueName = {}));
var Prefix;
(function (Prefix) {
    Prefix["vamtigerBrowserMethod"] = "vamtiger-browser-method";
    Prefix["db"] = "vamtiger-browser-method";
    Prefix["messageIdWindow"] = "vamtiger-browser-method-window";
    Prefix["messageIdWorker"] = "vamtiger-browser-method-worker";
    Prefix["messageIdServiceWorker"] = "vamtiger-browser-method-service-worker";
    Prefix["messageIdUnknownEnvironment"] = "vamtiger-browser-method-unknown-environment";
})(Prefix = exports.Prefix || (exports.Prefix = {}));
var ElementId;
(function (ElementId) {
    ElementId["metaElement"] = "vamtiger-browser-method";
})(ElementId = exports.ElementId || (exports.ElementId = {}));
var Origin;
(function (Origin) {
    Origin["nowhere"] = "";
    Origin["everyWhere"] = "*";
})(Origin = exports.Origin || (exports.Origin = {}));
var HostName;
(function (HostName) {
    HostName["localHost"] = "localhost";
})(HostName = exports.HostName || (exports.HostName = {}));
var LocalHostRelativePath;
(function (LocalHostRelativePath) {
    LocalHostRelativePath["vamtigerBrowserMethod"] = "vamtiger-browser-method.js";
})(LocalHostRelativePath = exports.LocalHostRelativePath || (exports.LocalHostRelativePath = {}));
var ScriptType;
(function (ScriptType) {
    ScriptType["js"] = "text/javascript";
    ScriptType["babel"] = "text/babel";
    ScriptType["json"] = "application/json";
    ScriptType["jsonld"] = "application/ld+json";
})(ScriptType = exports.ScriptType || (exports.ScriptType = {}));
var ScriptAttribute;
(function (ScriptAttribute) {
    ScriptAttribute["type"] = "type";
})(ScriptAttribute = exports.ScriptAttribute || (exports.ScriptAttribute = {}));
var DataAttribute;
(function (DataAttribute) {
    DataAttribute["vamtigerElementQuery"] = "vamtigerLoadElementQueryCss";
    DataAttribute["elementQueryCssLoaded"] = "elementQueryCssLoaded";
    DataAttribute["customElementName"] = "customElementName";
    DataAttribute["visible"] = "visible";
})(DataAttribute = exports.DataAttribute || (exports.DataAttribute = {}));
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
    ErrorMessage["scriptLoadedButMethodNameNotFound"] = "Failed to load method: Script loaded, but method name not found";
    ErrorMessage["crossOriginMethodsNotAllowed"] = "Cross-Origin methods are not allowed";
})(ErrorMessage = exports.ErrorMessage || (exports.ErrorMessage = {}));
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
})(StringConstant = exports.StringConstant || (exports.StringConstant = {}));
var TagName;
(function (TagName) {
    TagName["div"] = "div";
    TagName["template"] = "template";
})(TagName = exports.TagName || (exports.TagName = {}));
var LinkRel;
(function (LinkRel) {
    LinkRel["stylesheet"] = "stylesheet";
})(LinkRel = exports.LinkRel || (exports.LinkRel = {}));
var LoadScriptElement;
(function (LoadScriptElement) {
    LoadScriptElement["script"] = "script";
    LoadScriptElement["link"] = "link";
    LoadScriptElement["style"] = "style";
})(LoadScriptElement = exports.LoadScriptElement || (exports.LoadScriptElement = {}));
var Selector;
(function (Selector) {
    Selector["lastStylesheet"] = "style:last-of-type";
    Selector["lastMetaElement"] = "head > meta:last-of-type";
    Selector["webcomponentsjs"] = "script[src*=\"@webcomponents/webcomponentsjs\"]";
    Selector["style"] = "style";
    Selector["stylesheet"] = " link[rel=\"stylesheet\"]";
    Selector["vamtigerBrowserMethodJs"] = "[src$=\"vamtiger-browser-method.js\"]";
    Selector["vamtigerBrowserMethodJsonJs"] = "[src$=\"vamtiger-browser-method.js.json.js\"]";
    Selector["worker"] = "[src$=\"js.json.js\"][data-worker]";
    Selector["workderDependency"] = "script[data-worker-dependency]";
    Selector["vamtigerBrowserMethodJson"] = "[data-name$=\"vamtiger-browser-method.js.json\"]";
    Selector["vamtigerBrowserMethod"] = "[src$=\"vamtiger-browser-method.js\"]";
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
    Selector["dependencyUrlMetaElement"] = "meta[data-dependency]";
    Selector["urlMetaElement"] = "meta[data-url]";
})(Selector = exports.Selector || (exports.Selector = {}));
var TextModeElementName;
(function (TextModeElementName) {
    TextModeElementName["vamtigerJsonLdViewer"] = "vamtiger-json-ld-viewer";
})(TextModeElementName = exports.TextModeElementName || (exports.TextModeElementName = {}));
var MetaElementName;
(function (MetaElementName) {
    MetaElementName["loadElementQueryCss"] = "vamtiger-load-element-query-css";
})(MetaElementName = exports.MetaElementName || (exports.MetaElementName = {}));
var WorkerType;
(function (WorkerType) {
    WorkerType["all"] = "all";
    WorkerType["worker"] = "worker";
    WorkerType["serviceWorker"] = "serviceWorker";
})(WorkerType = exports.WorkerType || (exports.WorkerType = {}));
var ScriptNameSuffix;
(function (ScriptNameSuffix) {
    ScriptNameSuffix["style"] = "style";
    ScriptNameSuffix["stylesheet"] = "stylesheet";
})(ScriptNameSuffix = exports.ScriptNameSuffix || (exports.ScriptNameSuffix = {}));
var ScriptName;
(function (ScriptName) {
    ScriptName["textMode"] = "vamtiger-text-mode";
})(ScriptName = exports.ScriptName || (exports.ScriptName = {}));
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
    MessageAction["loadMethod"] = "loadMethod";
    MessageAction["updateMethod"] = "updateMethod";
    MessageAction["getMethodResult"] = "getMethodResult";
    MessageAction["importDependencies"] = "importDependencies";
    MessageAction["removeDependencyUrl"] = "removeDependencyUrl";
})(MessageAction = exports.MessageAction || (exports.MessageAction = {}));
var CustomEventName;
(function (CustomEventName) {
    CustomEventName["vamtigerBrowserMethod"] = "vamtiger-browser-method";
})(CustomEventName = exports.CustomEventName || (exports.CustomEventName = {}));
var HandleJsonLdAction;
(function (HandleJsonLdAction) {
    HandleJsonLdAction["handleJsonLdLoaded"] = "vamtiger-browser-method-handle-json-ld-loaded";
})(HandleJsonLdAction = exports.HandleJsonLdAction || (exports.HandleJsonLdAction = {}));
var DbName;
(function (DbName) {
    DbName["vamtigerBrowserSupport"] = "vamtiger-browser-support";
})(DbName = exports.DbName || (exports.DbName = {}));
var DbStoreName;
(function (DbStoreName) {
    DbStoreName["support"] = "support";
    DbStoreName["webComponent"] = "web-component";
    DbStoreName["customElementName"] = "custom-element-name";
})(DbStoreName = exports.DbStoreName || (exports.DbStoreName = {}));
var DbMode;
(function (DbMode) {
    DbMode["readonly"] = "readonly";
    DbMode["readwrite"] = "readwrite";
    DbMode["versionchange"] = "versionchange";
})(DbMode = exports.DbMode || (exports.DbMode = {}));
var DbKeyPath;
(function (DbKeyPath) {
    DbKeyPath["webComponent"] = "url";
    DbKeyPath["support"] = "environment";
    DbKeyPath["customElementName"] = "name";
})(DbKeyPath = exports.DbKeyPath || (exports.DbKeyPath = {}));
var Dependency;
(function (Dependency) {
    Dependency["lodash"] = "https://cdn.jsdelivr.net/npm/lodash@4.17.11";
    Dependency["jsonLdViewer"] = "https://vamtiger-project.github.io/vamtiger-json-ld-viewer/build/vamtiger-json-ld-viewer.js";
})(Dependency = exports.Dependency || (exports.Dependency = {}));
exports.regex = {
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
    trailingHtml: /\.html$/i,
    textModeElement: new RegExp(Object.keys(TextModeElementName)
        .map(function (key) { return TextModeElementName[key]; })
        .join(StringConstant.pipe), 'i')
};
exports.selector = {
    redundantScripts: [
        Selector.vamtigerBrowserMethodJsonJs,
        Selector.vamtigerBrowserMethodJson,
        Selector.vamtigerBrowserMethod,
        Selector.transpiledJs
    ].concat(Object.keys(Dependency).map(function (key) { return "[src=\"" + Dependency[key] + "\"]"; })).join(StringConstant.comma)
};
exports.sendMessageFromWorker = getPostMessage();
exports.ignore = function () { };
function getPostMessage() {
    try {
        return postMessage;
    }
    catch (error) { }
}
//# sourceMappingURL=types.js.map