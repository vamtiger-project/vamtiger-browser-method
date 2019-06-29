"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var __extends,__assign,__rest,__decorate,__param,__metadata,__awaiter,__generator$1,__exportStar,__values,__read,__spread,__await,__asyncGenerator,__asyncDelegator,__asyncValues,__makeTemplateObject,__importStar,__importDefault,Environment,EventName,TimeoutDuration,MessageQueueName,Prefix,Origin,HostName,LocalHostRelativePath,ScriptType,ScriptAttribute,DataAttribute,ErrorMessage,StringConstant,TagName,LinkRel,LoadScriptElement,Selector,MetaElementName,ScriptNameSuffix,MessageAction,DbName,DbStoreName,DbMode,DbKeyPath,Dependency,path=require("path"),chai=require("chai"),copyFile=_interopDefault(require("vamtiger-copy-file")),getFolderContent=_interopDefault(require("vamtiger-get-directory-content")),createFile=_interopDefault(require("vamtiger-create-file"));function __awaiter$1(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,s)}c((r=r.apply(e,t)).next())})}!function(e){var t="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:{};function n(e,n){return e!==t&&("function"==typeof Object.create?Object.defineProperty(e,"__esModule",{value:!0}):e.__esModule=!0),function(t,r){return e[t]=n?n(t,r):r}}"function"==typeof define&&define.amd?define("tslib",["exports"],function(r){e(n(t,n(r)))}):"object"==typeof module&&"object"==typeof module.exports?e(n(t,n(module.exports))):e(n(t))}(function(e){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};__extends=function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)},__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},__rest=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n},__decorate=function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},__param=function(e,t){return function(n,r){t(n,r,e)}},__metadata=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},__awaiter=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,s)}c((r=r.apply(e,t||[])).next())})},__generator$1=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},__exportStar=function(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])},__values=function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}},__read=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i},__spread=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(__read(arguments[t]));return e},__await=function(e){return this instanceof __await?(this.v=e,this):new __await(e)},__asyncGenerator=function(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),a=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){o[e]&&(r[e]=function(t){return new Promise(function(n,r){a.push([e,t,n,r])>1||s(e,t)})})}function s(e,t){try{(n=o[e](t)).value instanceof __await?Promise.resolve(n.value.v).then(c,l):u(a[0][2],n)}catch(e){u(a[0][3],e)}var n}function c(e){s("next",e)}function l(e){s("throw",e)}function u(e,t){e(t),a.shift(),a.length&&s(a[0][0],a[0][1])}},__asyncDelegator=function(e){var t,n;return t={},r("next"),r("throw",function(e){throw e}),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:__await(e[r](t)),done:"return"===r}:o?o(t):t}:o}},__asyncValues=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e="function"==typeof __values?__values(e):e[Symbol.iterator](),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise(function(r,o){(function(e,t,n,r){Promise.resolve(r).then(function(t){e({value:t,done:n})},t)})(r,o,(t=e[n](t)).done,t.value)})}}},__makeTemplateObject=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},e("__extends",__extends),e("__assign",__assign),e("__rest",__rest),e("__decorate",__decorate),e("__param",__param),e("__metadata",__metadata),e("__awaiter",__awaiter),e("__generator",__generator$1),e("__exportStar",__exportStar),e("__values",__values),e("__read",__read),e("__spread",__spread),e("__await",__await),e("__asyncGenerator",__asyncGenerator),e("__asyncDelegator",__asyncDelegator),e("__asyncValues",__asyncValues),e("__makeTemplateObject",__makeTemplateObject),e("__importStar",__importStar),e("__importDefault",__importDefault)}),function(e){e.window="window",e.worker="worker"}(Environment||(Environment={})),function(e){e.vamtigerBrowserMethodReady="vamtigerBrowserMethodReady"}(EventName||(EventName={})),function(e){e[e.webComponent=6e4]="webComponent",e[e.indexDbIsAccessible=100]="indexDbIsAccessible"}(TimeoutDuration||(TimeoutDuration={})),function(e){e.webComponent="webComponent"}(MessageQueueName||(MessageQueueName={})),function(e){e.vamtigerBrowserMethod="vamtiger-browser-method",e.db="vamtiger-browser-method",e.messageIdWindow="vamtiger-browser-method-window",e.messageIdWorker="vamtiger-browser-method-worker"}(Prefix||(Prefix={})),function(e){e.nowhere="",e.everyWhere="*"}(Origin||(Origin={})),function(e){e.localHost="localhost"}(HostName||(HostName={})),function(e){e.vamtigerBrowserMethod="vamtiger-browser-method.js"}(LocalHostRelativePath||(LocalHostRelativePath={})),function(e){e.js="text/javascript",e.babel="text/babel",e.json="application/json",e.jsonld="application/ld+json"}(ScriptType||(ScriptType={})),function(e){e.type="type"}(ScriptAttribute||(ScriptAttribute={})),function(e){e.vamtigerElementQuery="vamtigerLoadElementQueryCss",e.elementQueryCssLoaded="elementQueryCssLoaded"}(DataAttribute||(DataAttribute={})),function(e){e.failedToLoadScript="Failed to load script",e.windowPropertyNotSet="Window property not set",e.unsupportedFeature="Unsupported feature",e.customElementAreadyDefined="Custom element already defined",e.noElementName="No Element Name",e.noTemplateUrl="No Template URL",e.noElementSelector="No Template Selector",e.noTemplateForUrl="No Template for URL",e.noTemplate="No Template",e.noElementForSelector="No Element for Selector",e.noJsonLdParameter='No "jsonLd" property set'}(ErrorMessage||(ErrorMessage={})),function(e){e.nothing="",e.slash="/",e.dash="-",e.pipe="|",e.comma=",",e.backTick="`",e.doubleQuote='"',e.commaSpace=", ",e.space=" ",e.period="."}(StringConstant||(StringConstant={})),function(e){e.div="div",e.template="template"}(TagName||(TagName={})),function(e){e.stylesheet="stylesheet"}(LinkRel||(LinkRel={})),function(e){e.script="script",e.link="link",e.style="style"}(LoadScriptElement||(LoadScriptElement={})),function(e){e.lastStylesheet="style:last-of-type",e.lastMetaElement="head > meta:last-of-type",e.webcomponentsjs='script[src*="@webcomponents/webcomponentsjs"]',e.style="style",e.stylesheet=' link[rel="stylesheet"]',e.vamtigerBrowserMethodJsonJs='[src$="vamtiger-browser-method.js.json.js"]',e.worker='[src$="js.json.js"][data-worker]',e.vamtigerBrowserMethodJson='[data-name$="vamtiger-browser-method.js.json"]',e.vamtigerBrowserMethod='[data-name$="vamtiger-browser-method.js"]',e.script="script",e.jsonScript='script[type="application/json"]',e.jsonLdScript='script[type="application/ld+json"]',e.a="a",e.linkedDataCaption="[data-linked-data-caption]",e.linkedDataCaptionElement="[data-linked-data-caption-element]"}(Selector||(Selector={})),function(e){e.loadElementQueryCss="vamtiger-load-element-query-css"}(MetaElementName||(MetaElementName={})),function(e){e.style="style",e.stylesheet="stylesheet"}(ScriptNameSuffix||(ScriptNameSuffix={})),function(e){e.ignore="ignore",e.removeRedundantScripts="removeRedundantScripts",e.setWorkerSupport="setWorkerSupport",e.saveWebComponentData="saveWebComponentData",e.getWebComponentData="getWebComponentData",e.dequeue="dequeue",e.loadWebComponentData="loadWebComponentData",e.saveSupport="saveSupport"}(MessageAction||(MessageAction={})),function(e){e.vamtigerBrowserSupport="vamtiger-browser-support"}(DbName||(DbName={})),function(e){e.support="support",e.webComponent="web-component"}(DbStoreName||(DbStoreName={})),function(e){e.readonly="readonly",e.readwrite="readwrite",e.versionchange="versionchange"}(DbMode||(DbMode={})),function(e){e.webComponent="url",e.support="environment"}(DbKeyPath||(DbKeyPath={})),function(e){e.lodash="https://vamtiger-project.github.io/vamtiger-browser-method/build/lodash.min.js.json.js"}(Dependency||(Dependency={}));var regex={showRootHost:/:{1,2}host/gm,dash:new RegExp(StringConstant.dash,"g"),space:/\s/g,nonWord:/\W+/g,backTicks:/`/gm,remoteUrl:/^http(s)?/i,jsJsonJs:/\.js\.json\.js$/,jsonJs:/\.json\.js$/,trailingJs:/\.js$/,uppercase:/[A-Z]/,leadingAt:/^@/},selector={worker:[Selector.vamtigerBrowserMethod].join(StringConstant.comma),redundantScripts:[Selector.vamtigerBrowserMethodJsonJs,Selector.vamtigerBrowserMethodJson,Selector.vamtigerBrowserMethod].join(StringConstant.comma)},slash=StringConstant.slash,dependencyPaths=Array.from(new Set(["lodash/lodash.min.js"])),buildFolder=path.resolve(__dirname,".."),testHtmlSource=path.resolve(__dirname,"../../source/test/html/test.html"),testHtmlDestination=path.resolve(__dirname,"../index.html"),testTemplateSource=path.resolve(__dirname,"../../source/test/html/template.html"),testTemplateDestination=path.resolve(__dirname,"../template.html"),emptyScript=path.resolve(__dirname,"empty-script.js"),emptyStylesheet=path.resolve(__dirname,"empty-stylesheet.css"),dependencyParams=dependencyPaths.map(function(e){return path.resolve(__dirname,"../../node_modules",e)}).map(function(e){return{source:e,destination:path.resolve(__dirname,"../"+path.basename(e))}});describe("Generate",function(){before(function(){return __awaiter$1(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,Promise.all([copyFile({source:testHtmlSource,destination:testHtmlDestination}),copyFile({source:testTemplateSource,destination:testTemplateDestination}),createFile(emptyScript,"console.log('Empty Script');"),createFile(emptyStylesheet,""),Promise.all(dependencyParams.map(copyFile))])];case 1:return e.sent(),[2]}})})}),it("Test Preview",function(){return __awaiter$1(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return[4,getFolderContent(buildFolder).then(function(e){return new Set(e)})];case 1:return e=n.sent(),t=function(){function e(){}return e.prototype.test=function(){console.log()},e}(),(new t).test(),chai.expect(e.has(path.basename(testHtmlDestination))).to.be.true,[2]}})})})});
//# sourceMappingURL=node.js.map
