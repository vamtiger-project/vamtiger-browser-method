!function(e,t){"use strict";var n,r,o,i,a,s,c,u,l,d,f,m,p,h,v,w,b,y,g;!function(e){var t="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:{};function n(e,n){return e!==t&&("function"==typeof Object.create?Object.defineProperty(e,"__esModule",{value:!0}):e.__esModule=!0),function(t,r){return e[t]=n?n(t,r):r}}"function"==typeof define&&define.amd?define("tslib",["exports"],function(r){e(n(t,n(r)))}):"object"==typeof module&&"object"==typeof module.exports?e(n(t,n(module.exports))):e(n(t))}(function(e){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};n=function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)},r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n},i=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},a=function(e,t){return function(n,r){t(n,r,e)}},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t||[])).next())})},u=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},l=function(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])},d=function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}},f=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},m=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(f(arguments[t]));return e},p=function(e){return this instanceof p?(this.v=e,this):new p(e)},h=function(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(e){o[e]&&(r[e]=function(t){return new Promise(function(n,r){i.push([e,t,n,r])>1||s(e,t)})})}function s(e,t){try{(n=o[e](t)).value instanceof p?Promise.resolve(n.value.v).then(c,u):l(i[0][2],n)}catch(e){l(i[0][3],e)}var n}function c(e){s("next",e)}function u(e){s("throw",e)}function l(e,t){e(t),i.shift(),i.length&&s(i[0][0],i[0][1])}},v=function(e){var t,n;return t={},r("next"),r("throw",function(e){throw e}),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:p(e[r](t)),done:"return"===r}:o?o(t):t}:o}},w=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e="function"==typeof d?d(e):e[Symbol.iterator](),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise(function(r,o){(function(e,t,n,r){Promise.resolve(r).then(function(t){e({value:t,done:n})},t)})(r,o,(t=e[n](t)).done,t.value)})}}},b=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},y=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},g=function(e){return e&&e.__esModule?e:{default:e}},e("__extends",n),e("__assign",r),e("__rest",o),e("__decorate",i),e("__param",a),e("__metadata",s),e("__awaiter",c),e("__generator",u),e("__exportStar",l),e("__values",d),e("__read",f),e("__spread",m),e("__await",p),e("__asyncGenerator",h),e("__asyncDelegator",v),e("__asyncValues",w),e("__makeTemplateObject",b),e("__importStar",y),e("__importDefault",g)});const j=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e};function _(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t)).next())})}var k,S,M,x,E,L,O,C,T,B,P,D,N,q,A,V,W,R,J,H,I,U,Q,$,F,G,z,K,X,Y,Z,ee;!function(e){e.window="window",e.worker="worker",e.serviceWorker="serviceWorker",e.unknown="unknown"}(k||(k={})),function(e){e.vamtigerBrowserMethod="vamtiger-browser-method"}(S||(S={})),function(e){e.vamtigerBrowserMethodReady="vamtigerBrowserMethodReady"}(M||(M={})),function(e){e[e.webComponent=3e4]="webComponent",e[e.indexDbIsAccessible=100]="indexDbIsAccessible"}(x||(x={})),function(e){e.webComponent="webComponent"}(E||(E={})),function(e){e.vamtigerBrowserMethod="vamtiger-browser-method",e.db="vamtiger-browser-method",e.messageIdWindow="vamtiger-browser-method-window",e.messageIdWorker="vamtiger-browser-method-worker",e.messageIdServiceWorker="vamtiger-browser-method-service-worker",e.messageIdUnknownEnvironment="vamtiger-browser-method-unknown-environment"}(L||(L={})),function(e){e.metaElement="vamtiger-browser-method"}(O||(O={})),function(e){e.nowhere="",e.everyWhere="*"}(C||(C={})),function(e){e.localHost="localhost"}(T||(T={})),function(e){e.vamtigerBrowserMethod="vamtiger-browser-method.js"}(B||(B={})),function(e){e.js="text/javascript",e.babel="text/babel",e.json="application/json",e.jsonld="application/ld+json"}(P||(P={})),function(e){e.type="type"}(D||(D={})),function(e){e.vamtigerElementQuery="vamtigerLoadElementQueryCss",e.elementQueryCssLoaded="elementQueryCssLoaded",e.customElementName="customElementName",e.visible="visible"}(N||(N={})),function(e){e.failedToLoadScript="Failed to load script",e.windowPropertyNotSet="Window property not set",e.unsupportedFeature="Unsupported feature",e.customElementAreadyDefined="Custom element already defined",e.noElementName="No Element Name",e.noTemplateUrl="No Template URL",e.noElementSelector="No Template Selector",e.noTemplateForUrl="No Template for URL",e.noTemplate="No Template",e.noElementForSelector="No Element for Selector",e.noJsonLdParameter='No "jsonLd" property set',e.scriptLoadedButMethodNameNotFound="Failed to load method: Script loaded, but method name not found",e.crossOriginMethodsNotAllowed="Cross-Origin methods are not allowed"}(q||(q={})),function(e){e.nothing="",e.slash="/",e.dash="-",e.pipe="|",e.comma=",",e.backTick="`",e.doubleQuote='"',e.commaSpace=", ",e.space=" ",e.period=".",e.newline="\n",e.semiColon=";"}(A||(A={})),function(e){e.div="div",e.template="template"}(V||(V={})),function(e){e.stylesheet="stylesheet"}(W||(W={})),function(e){e.script="script",e.link="link",e.style="style"}(R||(R={})),function(e){e.lastStylesheet="style:last-of-type",e.lastMetaElement="head > meta:last-of-type",e.webcomponentsjs='script[src*="@webcomponents/webcomponentsjs"]',e.style="style",e.stylesheet=' link[rel="stylesheet"]',e.vamtigerBrowserMethodJs='[src="vamtiger-browser-method.js"]',e.vamtigerBrowserMethodJsonJs='[src$="vamtiger-browser-method.js.json.js"]',e.worker='[src$="js.json.js"][data-worker]',e.workderDependency="script[data-worker-dependency]",e.vamtigerBrowserMethodJson='[data-name$="vamtiger-browser-method.js.json"]',e.vamtigerBrowserMethod='[data-name$="vamtiger-browser-method.js"]',e.script="script",e.jsonScript='script[type="application/json"]',e.jsonLdScript='script[type="application/ld+json"]',e.a="a",e.linkedDataCaption="[data-linked-data-caption]",e.linkedDataCaptionElement="[data-linked-data-caption-element]",e.jsonLdViewer="vamtiger-json-ld-viewer",e.transpiledJs="[data-transpiled-js]",e.htmlTextMode="html[data-vamtiger-text-mode]",e.customElementNameMetaElement="meta[data-custom-element-name]",e.dependencyUrlMetaElement="meta[data-dependency]",e.urlMetaElement="meta[data-url]"}(J||(J={})),function(e){e.vamtigerJsonLdViewer="vamtiger-json-ld-viewer"}(H||(H={})),function(e){e.loadElementQueryCss="vamtiger-load-element-query-css"}(I||(I={})),function(e){e.all="all",e.worker="worker",e.serviceWorker="serviceWorker"}(U||(U={})),function(e){e.style="style",e.stylesheet="stylesheet"}(Q||(Q={})),function(e){e.textMode="vamtiger-text-mode"}($||($={})),function(e){e.ignore="ignore",e.removeRedundantScripts="removeRedundantScripts",e.setWorkerSupport="setWorkerSupport",e.saveWebComponentData="saveWebComponentData",e.getWebComponentData="getWebComponentData",e.dequeue="dequeue",e.loadWebComponentData="loadWebComponentData",e.saveSupport="saveSupport",e.saveCustomElementName="saveCustomElementName",e.getTextModeCss="getTextModeCss",e.loadScript="loadScript",e.loadMethod="loadMethod",e.updateMethod="updateMethod",e.getMethodResult="getMethodResult",e.importDependencies="importDependencies",e.removeDependencyUrl="removeDependencyUrl"}(F||(F={})),function(e){e.vamtigerBrowserMethod="vamtiger-browser-method"}(G||(G={})),function(e){e.dequeue="vamtiger-browser-method-dequeue"}(z||(z={})),function(e){e.vamtigerBrowserSupport="vamtiger-browser-support"}(K||(K={})),function(e){e.support="support",e.webComponent="web-component",e.customElementName="custom-element-name"}(X||(X={})),function(e){e.readonly="readonly",e.readwrite="readwrite",e.versionchange="versionchange"}(Y||(Y={})),function(e){e.webComponent="url",e.support="environment",e.customElementName="name"}(Z||(Z={})),function(e){e.lodash="https://cdn.jsdelivr.net/npm/lodash@4.17.11",e.jsonLdViewer="https://vamtiger-project.github.io/vamtiger-json-ld-viewer/build/vamtiger-json-ld-viewer.js"}(ee||(ee={}));var te=/:{1,2}host/gm,ne=(new RegExp(A.dash,"g"),/^http(s)?/i),re=/\.js\.json\.js$/,oe=/\.json\.js$/,ie=/\.js$/,ae=/^@/,se=/^email$/i,ce=(new RegExp(Object.keys(H).map(function(e){return H[e]}).join(A.pipe),"i"),[J.vamtigerBrowserMethodJsonJs,J.vamtigerBrowserMethodJson,J.vamtigerBrowserMethod,J.transpiledJs].concat(Object.keys(ee).map(function(e){return'[src="'+ee[e]+'"]'})).join(A.comma),function(){try{return postMessage}catch(e){}}());var ue=A.nothing;var le=self.requestIdleCallback,de=te,fe=A.nothing;function me(e){var t=e.css,n=e.stylesheetName,r=void 0===n?fe:n,o=e.hostName,i=void 0===o?fe:o;return _(this,void 0,void 0,function(){var e,n,o,a,s,c,u;return __generator(this,function(l){return e=self._,n=e.camelCase,o=function(e){var t=e.selector,n=void 0===t?ue:t,r=e.properties,o=void 0===r?{}:r,i=e.dataset,a=void 0===i?{}:i,s=e.attributes,c=void 0===s?{}:s,u=o.id,l=document.head,d=l.querySelector(J.lastMetaElement),f=Object.keys(c),m=u&&(window[u]||n&&l.querySelector(n)),p=!m&&document.createElement("meta"),h=m||p;return p&&(Object.assign(p,o),Object.assign(p.dataset,a),d&&d.nextElementSibling?l.insertBefore(p,d.nextElementSibling):l.appendChild(p)),f.forEach(function(e){return!h.hasAttribute(e)&&h.setAttribute(void 0,c[e])}),h}({properties:{id:I.loadElementQueryCss}}),a=n(r),s=o.dataset,c=!s.hasOwnProperty(i)&&i&&t.replace(de,i)||t,u=self.EQCSS,c&&u&&(u.register(u.parse(c)),a?s[a]=fe:i&&(s[i]=fe)),[2,!0]})})}var pe,he,ve={presets:["es2015"]},we=new Set(["number","string",typeof!0]),be=(he=1/(pe=5),Array(pe).fill(void 0).map(function(e,t){return t?(t+1)*he:t}),{includeUncontrolled:!0});ee.lodash,A.nothing;function ye(e){return console.warn(e.message),console.warn(e.stack),""}function ge(){try{return self instanceof Window}catch(e){return!1}}function je(){try{return self instanceof DedicatedWorkerGlobalScope}catch(e){return!1}}function _e(){try{return self instanceof ServiceWorkerGlobalScope}catch(e){return!1}}function ke(e){return _(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return(t=_e())?[4,function(e){var t=e.type,n=j({},be,{type:t});return self&&self.clients&&self.clients.matchAll&&self.clients.matchAll(n)}(e)]:[3,2];case 1:t=n.sent(),n.label=2;case 2:return[2,t||[]]}})})}var Se=JSON.stringify,Me=new TextEncoder;function xe(e){var t=navigator.serviceWorker,n=e.workerType,r=void 0===n?U.worker:n,o=self.VamtigerBrowserMethod,i=o.worker,a=(o.support||{}).textEncoder,s=Se(e),c=a&&Me.encode(s)||s;ge()?r===U.all?(i&&i.postMessage(c),t&&t.controller&&t.controller.postMessage(c)):r===U.worker?i&&i.postMessage(c):r===U.serviceWorker&&t&&t.controller&&t.controller.postMessage(c):je()?ce&&ce(c):_e()&&function(e){var t=e.clients,n=void 0===t?"window":t,r=e.message;_(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return[4,ke({type:n})];case 1:return e=t.sent(),Promise.all(e.map(function(e){return e.postMessage(r)})),[2]}})})}({message:c})}var Ee=JSON.parse;function Le(e){var t=e.script.innerHTML,n=!1;try{Ee(t),n=!0}catch(e){console.warn(e),n=!1}return n}var Oe=self.requestIdleCallback,Ce=A.dash,Te=L.vamtigerBrowserMethod;function Be(e){return _(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return ge()?[4,function(e){return _(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return t=document.head,[4,function(e){return new Promise(function(t,n){Oe?Oe(function(){return Pe(j({},e,{resolve:t,reject:n}))}):setTimeout(function(){return Pe(j({},e,{resolve:t,reject:n}))},0)})}(j({},e,{parent:t}))];case 1:return n.sent(),[2]}})})}(e)]:[3,2];case 1:t.sent(),t.label=2;case 2:return je()&&function(e){var t=e.selector;xe({action:F.removeRedundantScripts,params:{selector:t}})}(e),[2]}})})}function Pe(e){var t=e.selector,n=e.parent,r=e.resolve,o=(e.reject,document.head),i=Array.from(n.querySelectorAll(t)),a=i.filter(function(e){var t=e.type;return e.src||!t||t===P.js}),s=i.filter(function(e){return e.type===P.json}).filter(function(e){return Le({script:e})}),c=i.filter(function(e){return e.type===P.jsonld}).filter(function(e){return Le({script:e})}),u=c.concat(s),l=(new Date).getTime(),d=s.length&&[Te,P.json,l].join(Ce),f=d&&'script[type="'+P.json+'"][data-name="'+d+'"]',m=c.length&&[Te,P.jsonld,l].join(Ce),p=m&&'script[type="'+P.jsonld+'"][data-name="'+m+'"]';a.length&&d&&a.forEach(function(e){return e.dataset.name=d||""}),c.length&&m&&p&&c.forEach(function(e){return e.dataset.name=m||""}),f&&n!==o&&(n.dataset.json=f),p&&n!==o&&(n.dataset.jsonLd=p),i.length&&(n.dataset.removedScripts=(Number(n.dataset.removedScripts||0)+i.length).toString()),u.forEach(function(e){return o.appendChild(e)}),i.forEach(function(e){return n.removeChild(e)}),r&&r()}var De=JSON.parse,Ne=q.failedToLoadScript,qe=W.stylesheet,Ae=R.script,Ve=R.link,We=R.style,Re=ne,Je=re,He=oe,Ie=ie,Ue=A.nothing,Qe=A.slash;function $e(e){var t=this;return new Promise(function(n,r){return _(t,void 0,void 0,function(){function t(){return _(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return L?(i(),f&&a.removeChild(L),h&&h.match(Je)?[4,function(e){var t=e.src,n=e.workerDependency;return _(this,void 0,void 0,function(){var e,r,o,i,a,s,c,u,l;return __generator(this,function(d){switch(d.label){case 0:return e=document.head,r=t.replace(Ie,Ue).split(Qe),o=r[r.length-1],i=t&&o&&'script[type="'+P.json+'"][data-name="'+o+'"]',a=i&&e.querySelector(i),s=a&&a.innerHTML&&De(a.innerHTML),c=s&&s.text,u=t.replace(He,Ue),l=['script[src="'+t+'"]',i,J.transpiledJs].join(A.comma),u&&c?[4,$e({name:u,js:c,workerDependency:n}).catch(Fe)]:[3,3];case 1:return d.sent(),[4,Be({selector:l})];case 2:d.sent(),d.label=3;case 3:return[2]}})})}({src:h,workerDependency:p})]:[3,2]):[3,3];case 1:e.sent(),e.label=2;case 2:n(L),e.label=3;case 3:return[2]}})})}function o(e){i(),console.error(e),r(new Error(""+Ne))}function i(){L&&(L.removeEventListener("load",t),L.removeEventListener("error",o))}var a,s,c,u,l,d,f,m,p,h,v,w,b,y,g,j,k,S,M,x,E,L;return __generator(this,function(r){switch(r.label){case 0:return a=document.head,s=document.body,u=(c=e).js,l=c.name,d=c.jsonld,f=c.removeFromDom,m=c.workerDependency,p=void 0!==m&&m,h=e.src,(w=u||h&&!h.match(Re))?[4,function(e){var t=e.url,n=e.js;return _(this,void 0,void 0,function(){var e,r,o,i,a,s,c;return __generator(this,function(u){switch(u.label){case 0:return e=self.fetch,r=self.Babel,o=(r||{transform:void 0}).transform,(a=o)?(s=n)?[3,3]:(c=t)?[4,e(t).then(function(e){return e&&e.text()}).catch(ye)]:[3,2]:[3,4];case 1:c=u.sent(),u.label=2;case 2:s=c,u.label=3;case 3:a=s,u.label=4;case 4:return[2,((i=a)&&i.trim()&&o&&o(i,ve)||{code:""}).code||n]}})})}({js:u,url:h})]:[3,2];case 1:w=r.sent(),r.label=2;case 2:return v=w||"",y=(b=e).css,g=b.name,j=e.href,k=e.json,S=e.hasOwnProperty("src")||e.hasOwnProperty("href"),M=(u||k||h)&&Ae||y&&We||j&&Ve,x=h&&'script[src="'+h+'"]'||j&&'link[href="'+j+'"]'||u&&l&&'script[data-name="'+l+'"]'||d&&l&&'script[data-name="'+l+'"][type="'+P.jsonld+'"]'||y&&g&&'style[data-name="'+g+'"]',E=a.querySelector(x)||s.querySelector(x),(L=x&&M&&document.createElement(M))instanceof HTMLScriptElement?(!v&&h?L.src=h:(k||v||u)&&(L.innerHTML=k||v||u,L.dataset.name=l||h,d?(L.setAttribute(D.type,P.jsonld),L.dataset.jsonLd=L.dataset.name):k?L.setAttribute(D.type,P.json):v&&(L.dataset.transpiledJs=Ue)),[3,6]):[3,3];case 3:return L instanceof HTMLLinkElement?(L.rel=qe,L.href=j,[3,6]):[3,4];case 4:return L instanceof HTMLStyleElement?(L.innerHTML=y,L.dataset.name=g,[4,function(e){var t=this;return new Promise(function(n,r){return _(t,void 0,void 0,function(){return __generator(this,function(t){return le?le(function(){return me(e).then(n).catch(r)}):setTimeout(function(){return me(e).then(n).catch(r)},0),[2]})})})}({css:y,stylesheetName:g})]):[3,6];case 5:r.sent(),r.label=6;case 6:return E?n(E):L&&(a.appendChild(L),S&&(L.addEventListener("load",t),L.addEventListener("error",o)),p&&(L.dataset.workerDependency=Ue),!v&&S||t()),[2]}})})})}function Fe(e){console.warn(e.name),console.warn(e.message),console.warn(e.stack)}var Ge="vamtiger-browser-method.js.json.js";function ze(){return new Promise(function(e,t){var n=self.VamtigerBrowserMethod;!n&&addEventListener(M.vamtigerBrowserMethodReady,e),$e({name:Ge,src:Ge}),n&&e()})}function Ke(){return new Promise(function(t,n){var r=window.VamtigerBrowserMethod;e.expect(r).to.be.ok,t()})}var Xe=A.slash,Ye=["test","empty-script.js"].join(Xe),Ze=["test","empty-stylesheet.css"].join(Xe),et=new Array(10).fill(Ye),tt=new Array(10).fill(Ze);function nt(){return _(this,void 0,void 0,function(){var t,n;return __generator(this,function(r){switch(r.label){case 0:return t=window.VamtigerBrowserMethod,[4,(0,t.getElement)({name:"templateTest",template:"<div>/div>"})];case 1:return n=r.sent(),e.expect(n).to.be.ok,[2]}})})}function rt(){return _(this,void 0,void 0,function(){var t,n;return __generator(this,function(r){switch(r.label){case 0:return t=window.VamtigerBrowserMethod,[4,(0,t.getElement)({name:"urlTemplateTest",url:"template.html",selector:"[data-url-template]"})];case 1:return n=r.sent(),e.expect(n).to.be.ok,[2]}})})}function ot(){return _(this,void 0,void 0,function(){var t,n;return __generator(this,function(r){switch(r.label){case 0:return t=window.VamtigerBrowserMethod,[4,(0,t.getData)({json:"http://127.0.0.1:8000/test/json-data/json-ld.js"})];case 1:return n=r.sent(),e.expect(n).to.be.ok,e.expect(n.jsonLd).to.be.ok,e.expect(n.jsonLd["@context"]).to.be.ok,e.expect(n.json).to.be.ok,[2]}})})}function at(){return _(this,void 0,void 0,function(){var t,n,r,o;return __generator(this,function(i){switch(i.label){case 0:return t=window.VamtigerBrowserMethod,[4,(0,t.getData)({jsonLd:"https://vamtiger-project.github.io/vamtiger-mental-health-botswana-json-ld/build/vamtiger-mental-health-botswana-2018-json-ld.js",textMode:!0})];case 1:return n=i.sent(),r=n.jsonLd,o=r[0],e.expect(o).to.be.ok,e.expect(o["@context"]).to.equal("http://schema.org"),e.expect(o["@type"]).to.equal("VisualArtwork"),[2]}})})}function st(e){var t=e.href,n=e.text;return t&&n&&'<a href="'+t+'" target="_blank">'+n+"</a>"||""}var ct=self.requestIdleCallback,ut=A.nothing,lt=A.slash,dt=ae,ft=ne,mt=se;function pt(e){var t=e.jsonLd;return _(this,void 0,void 0,function(){var e,n,r,o;return __generator(this,function(i){switch(i.label){case 0:return e=function(e){var t=e.jsonLd,n=self._.startCase,r=t["@context"],o=void 0===r?void 0:r,i=t["@type"],a=void 0===i?void 0:i,s=o&&a&&[o,a].join(lt),c=a&&n(a),u=st({href:s,text:c});u&&(t["@type"]=u);return t}({jsonLd:t}),n=Object.keys(e),[4,Promise.all(n.map(function(t){return function(e){var t=e.key,n=e.value;return _(this,void 0,void 0,function(){var e,r,o,i,a,s,c;return __generator(this,function(u){switch(u.label){case 0:return e=self._,r=e.startCase,o=we.has(typeof n)&&n,i=Array.isArray(n)&&n||"object"==typeof n&&[n],(s=i)?[4,Promise.all(i.map(function(e){return pt({jsonLd:e})}))]:[3,2];case 1:s=u.sent(),u.label=2;case 2:return a=s,c=[[r(t.replace(dt,ut)),o&&(t.match(mt)&&(l={href:o.toString(),text:o.toString()},d=l.href,f=l.text,d&&f&&'<a href="mailto:'+d+'">'+f+"</a>"||"")||function(e){var t=e.toString().trim(),n=t.match(ft)&&t,r=n&&t&&t.split(lt).pop();return n&&r&&st({href:n,text:r})||t}(o))||ut]],a&&a.forEach(function(e){return e.forEach(function(e){return c.push(e)})}),[2,c]}var l,d,f})})}({key:t,value:e[t]})}))];case 1:return r=i.sent(),o=[],r.forEach(function(e){return e.forEach(function(e){return o.push(e)})}),[2,o]}})})}var ht=JSON.parse;function vt(){return _(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})}var wt="vamtiger-browser-method-get-responsive-column-clip-paths.js";function bt(){return _(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return e=self.VamtigerBrowserMethod,[4,(0,e.loadMethod)({relativeUrl:wt,name:"test"})];case 1:return t.sent(),[2]}})})}var yt="vamtiger-browser-method-get-responsive-column-clip-paths.js";function gt(){return _(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return e=self.VamtigerBrowserMethod,[4,(0,e.loadMethod)({relativeUrl:yt,name:"test"})];case 1:return t.sent(),[2]}})})}function jt(){return _(this,void 0,void 0,function(){var t,n;return __generator(this,function(r){switch(r.label){case 0:return t=self.VamtigerBrowserMethod,[4,(0,t.method.getResponsiveColumnClipPaths)({columns:3,offset:2})];case 1:return n=r.sent(),e.expect(n).to.be.ok,e.expect(n.length).to.equal(3),[2]}})})}t.setup("bdd"),describe("load vamtiger-browser-method",function(){it("load script",ze),it("window.VamtigerBrowserMethod",Ke)}),describe("loadScript",function(){before(function(){return _(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return e=window.VamtigerBrowserMethod,t=e.loadScript,[4,Promise.all(et.map(function(e){return t({src:e})}))];case 1:return n.sent(),[4,Promise.all(tt.map(function(e){return t({href:e})}))];case 2:return n.sent(),[2]}})})}),it("Append to Document Head",function(){return _(this,void 0,void 0,function(){var t,n,r,o,i;return __generator(this,function(a){return t=document.head,n='script[src="'+Ye+'"]',r='link[href="'+Ze+'"]',o=t.querySelector(n),i=t.querySelector(r),e.expect(o).to.be.ok,e.expect(i).to.be.ok,[2]})})}),it("Append once per script",function(){return _(this,void 0,void 0,function(){var t,n,r,o,i;return __generator(this,function(a){return t=document.head,n='script[src="'+Ye+'"]',r='link[href="'+Ze+'"]',o=Array.from(t.querySelectorAll(n)),i=Array.from(t.querySelectorAll(r)),e.expect(o.length).to.equal(1),e.expect(i.length).to.equal(1),[2]})})}),it("remote script",function(){return _(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return[4,(0,window.VamtigerBrowserMethod.loadScript)({src:Ye})];case 1:return t=n.sent(),e.expect(t instanceof HTMLScriptElement).to.be.true,[2]}})})}),it("remote stylesheet",function(){return _(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return[4,(0,window.VamtigerBrowserMethod.loadScript)({href:Ze})];case 1:return t=n.sent(),e.expect(t instanceof HTMLLinkElement).to.be.true,[2]}})})}),it("inline script",function(){return _(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return[4,(0,window.VamtigerBrowserMethod.loadScript)({js:'console.log("inline script");',name:"inline-script"})];case 1:return t=n.sent(),e.expect(t instanceof HTMLScriptElement).to.be.true,e.expect(t.dataset.name).to.equal("inline-script"),[2]}})})}),it("inline stylesheet",function(){return _(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return[4,(0,window.VamtigerBrowserMethod.loadScript)({css:"/** Inline Stylesheet **/",name:"inline-stylesheet"})];case 1:return t=n.sent(),e.expect(t instanceof HTMLStyleElement).to.be.true,e.expect(t.dataset.name).to.equal("inline-stylesheet"),[2]}})})})}),describe("defineCustomElement",function(){before(function(){(0,window.VamtigerBrowserMethod.defineCustomElement)({name:"new-custom-element",constructor:HTMLElement})}),it("define a new custom element",function(){return _(this,void 0,void 0,function(){var t;return __generator(this,function(n){return t=window.customElements,e.expect(t.get("new-custom-element")).to.be.ok,[2]})})}),it("throw an error when already defined",function(){return _(this,void 0,void 0,function(){var t,n,r;return __generator(this,function(o){return t=window.VamtigerBrowserMethod,n=t.defineCustomElement,r={name:"new-custom-element",constructor:HTMLElement},[2,Promise.resolve().then(function(){return n(r)}).catch(function(t){return e.expect(t).to.be.an("error")})]})})})}),describe("getTemplate",function(){this.timeout(5e3),it("template",nt),it("url",rt)}),describe("getData",function(){this.timeout(5e3),before(function(){document.documentElement.dataset.vamtigerTextMode=""}),it.skip("json-ld",at),it("json-ld-data",ot)}),describe.skip("getJsonLdArray",function(){it("jsonLd arrray",function(){return _(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return e=document.head,[4,function(e){var t=this;return new Promise(function(n,r){return _(t,void 0,void 0,function(){return __generator(this,function(t){return ct?ct(function(){return pt(e).then(n).catch(r)}):setTimeout(function(){return pt(e).then(n).catch(r)},0),[2]})})})}({jsonLd:(t=e.querySelector('[data-name="https://vamtiger-project.github.io/vamtiger-mental-health-botswana-json-ld/build/vamtiger-mental-health-botswana-2018-json-ld.js"]'))&&ht(t.innerHTML)})];case 1:return n.sent(),[2]}})})})}),describe.skip("intersectionObserver",function(){before(function(){var e=window.VamtigerBrowserMethod.intersectionObserver,t=document.createElement("div");t.dataset.intercetionObserver="",e&&e.observe(t),document.body.appendChild(t)}),it("intersectionObserver",vt)}),describe("loadMethod",function(){it("script",bt)}),describe("getMethodResult",function(){before(gt),it("named method",jt)}),t.run()}(chai,mocha);
//# sourceMappingURL=browser.js.map
