!function(){"use strict";var e,t,n,r,o,i,a,c,u,l,s,f,d,m,p,y,h,w,v;!function(e){var t="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:{};function n(e,n){return e!==t&&("function"==typeof Object.create?Object.defineProperty(e,"__esModule",{value:!0}):e.__esModule=!0),function(t,r){return e[t]=n?n(t,r):r}}"function"==typeof define&&define.amd?define("tslib",["exports"],function(r){e(n(t,n(r)))}):"object"==typeof module&&"object"==typeof module.exports?e(n(t,n(module.exports))):e(n(t))}(function(b){var _=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};e=function(e,t){function n(){this.constructor=e}_(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n},r=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},o=function(e,t){return function(n,r){t(n,r,e)}},i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function c(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,c)}u((r=r.apply(e,t||[])).next())})},c=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},u=function(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])},l=function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}},s=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},f=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(s(arguments[t]));return e},d=function(e){return this instanceof d?(this.v=e,this):new d(e)},m=function(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(e){o[e]&&(r[e]=function(t){return new Promise(function(n,r){i.push([e,t,n,r])>1||c(e,t)})})}function c(e,t){try{(n=o[e](t)).value instanceof d?Promise.resolve(n.value.v).then(u,l):s(i[0][2],n)}catch(e){s(i[0][3],e)}var n}function u(e){c("next",e)}function l(e){c("throw",e)}function s(e,t){e(t),i.shift(),i.length&&c(i[0][0],i[0][1])}},p=function(e){var t,n;return t={},r("next"),r("throw",function(e){throw e}),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:d(e[r](t)),done:"return"===r}:o?o(t):t}:o}},y=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e="function"==typeof l?l(e):e[Symbol.iterator](),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise(function(r,o){(function(e,t,n,r){Promise.resolve(r).then(function(t){e({value:t,done:n})},t)})(r,o,(t=e[n](t)).done,t.value)})}}},h=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},w=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},v=function(e){return e&&e.__esModule?e:{default:e}},b("__extends",e),b("__assign",t),b("__rest",n),b("__decorate",r),b("__param",o),b("__metadata",i),b("__awaiter",a),b("__generator",c),b("__exportStar",u),b("__values",l),b("__read",s),b("__spread",f),b("__await",d),b("__asyncGenerator",m),b("__asyncDelegator",p),b("__asyncValues",y),b("__makeTemplateObject",h),b("__importStar",w),b("__importDefault",v)});var b,_,E,S,g,j,O,P,T,x,L=Object.freeze({});function C(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function c(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,c)}u((r=r.apply(e,t)).next())})}Object.keys(L).forEach(function(e){window[e]||(window[e]=L[e])}),function(e){e.jsonld="application/ld+json"}(b||(b={})),function(e){e.type="type"}(_||(_={})),function(e){e.vamtigerElementQuery="vamtigerLoadElementQueryCss",e.elementQueryCssLoaded="elementQueryCssLoaded"}(E||(E={})),function(e){e.failedToLoadScript="Failed to load script",e.windowPropertyNotSet="Window property not set",e.unsupportedFeature="Unsupported feature",e.customElementAreadyDefined="Custom element already defined",e.noElementName="No Element Name",e.noTemplateUrl="No Template URL",e.noElementSelector="No Template Selector",e.noTemplateForUrl="No Template for URL",e.noTemplate="No Template",e.noElementForSelector="No Element for Selector"}(S||(S={})),function(e){e.nothing="",e.slash="/",e.dash="-"}(g||(g={})),function(e){e.div="div"}(j||(j={})),function(e){e.stylesheet="stylesheet"}(O||(O={})),function(e){e.script="script",e.link="link",e.style="style"}(P||(P={})),function(e){e.lastStylesheet="style:last-of-type",e.webcomponentsjs='script[src*="@webcomponents/webcomponentsjs"]'}(T||(T={})),function(e){e.loadElementQueryCss="vamtiger-load-element-query-css"}(x||(x={}));var M=/:{1,2}host/gm,N=(new RegExp(g.dash,"g"),/\W+/g),k=g.nothing;var R=g.nothing,A=N,F=function(e){return e.split(A).map(function(e,t){return!t&&e.toLowerCase()||e.slice(0,1).toUpperCase()+e.slice(1).toLowerCase()}).join(R)},H=M,U=g.nothing;function q(e){var t=e.css,n=e.stylesheetName,r=void 0===n?U:n,o=e.hostName,i=void 0===o?U:o,a=function(e){var t=e.selector,n=void 0===t?k:t,r=e.properties,o=void 0===r?{}:r,i=e.dataset,a=void 0===i?{}:i,c=e.attributes,u=void 0===c?{}:c,l=o.id,s=document.head,f=Object.keys(u),d=l&&(window[l]||n&&s.querySelector(n)),m=!d&&document.createElement("meta"),p=d||m;return m&&(Object.assign(m,o),Object.assign(m.dataset,a),s.appendChild(m)),f.forEach(function(e){return!p.hasAttribute(e)&&p.setAttribute(void 0,u[e])}),p}({properties:{id:x.loadElementQueryCss}}),c=F(r);console.log(r,c);var u=a.dataset,l=!u.hasOwnProperty(i)&&i&&t.replace(H,i)||t,s=window.EQCSS;l&&s&&(s.register(s.parse(l)),c?u[c]=U:i&&(u[i]=U))}var I=S.failedToLoadScript,Q=O.stylesheet,D=P.script,B=P.link,V=P.style,G=function(e){return new Promise(function(t,n){var r=document.head,o=document.body,i=e,a=i.js,c=i.name,u=i.jsonld,l=e.src,s=e,f=s.css,d=s.name,m=e.href,p=e.hasOwnProperty("src")||e.hasOwnProperty("href"),y=(a||l)&&D||f&&V||m&&B,h=l&&'script[src="'+l+'"]'||m&&'link[href="'+m+'"]'||a&&c&&'script[data-name="'+c+'"]'||f&&d&&'style[data-name="'+d+'"]',w=r.querySelector(h)||o.querySelector(h),v=h&&y&&document.createElement(y);v instanceof HTMLScriptElement?l?v.src=l:a&&(v.innerHTML=a,v.dataset.name=c,u&&v.setAttribute(_.type,b.jsonld)):v instanceof HTMLLinkElement?(v.rel=Q,v.href=m):v instanceof HTMLStyleElement&&(v.innerHTML=f,v.dataset.name=d,q({css:f,stylesheetName:d})),w?t(w):v&&(r.appendChild(v),p?(v.addEventListener("load",function e(n){v&&(v.removeEventListener("load",e),t(v))}),v.addEventListener("error",function e(t){v&&v.removeEventListener("error",e);console.error(t);n(new Error(""+I))})):t(v))})};var W=S.unsupportedFeature,z=S.customElementAreadyDefined;var J=j.div,K=S.noElementName,X=S.noTemplate,Y=S.noElementForSelector;var Z=j.div,$=S.noElementName,ee=S.noElementSelector,te=S.noTemplateUrl,ne=S.noTemplateForUrl,re=S.noElementForSelector;var oe=window.VamtigerBrowserMethod,ie={loadScript:G,loadScripts:function(e){return Promise.all(e.map(G))},loadScriptsSequentially:function(e){return new Promise(function(t,n){var r=new Set,o=Promise.resolve();return e.forEach(function(e){o=o.then(function(){return C(void 0,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(G))];case 1:return[2,t.sent()]}})})}).then(function(e){return e.forEach(function(e){return r.add(e)})})}),o=o.then(function(){return t(Array.from(r))})})},loadShadowStylesheet:function(e){var t=e.css,n=e.element,r=n.shadowRoot,o=(n.localName,r&&r.querySelector(T.lastStylesheet)),i=r&&document.createElement("style");i&&r&&(i.innerHTML=t,o&&o.nextElementSibling?r.insertBefore(i,o.nextElementSibling):r.appendChild(i))},defineCustomElement:function e(t){var n=t.name,r=t.constructor,o=t.ignore,i=window.customElements,a=i&&i.define,c=a&&i.get&&i.get(n);if(a&&!c)i.define(n,r);else{if(c)throw new Error(z+": "+n);if(o)throw new Error(W+": Custom Elements - "+n);e({name:n,constructor:r,ignore:!0})}},pause:function(e){var t=e.milliseconds,n=void 0===t?1e3:t;return new Promise(function(e,t){return setTimeout(e,n)})},getElement:function(e){return C(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return e.url?[4,function(e){var t=e.name,n=e.url,r=e.selector;return C(this,void 0,void 0,function(){var e,o,i,a;return __generator(this,function(c){switch(c.label){case 0:return(o=t&&r&&n)?[4,fetch(n).then(function(e){return e.text()})]:[3,2];case 1:o=c.sent(),c.label=2;case 2:if(i=(e=o)&&document.createElement(Z),a=null,!t)throw new Error($);if(!r)throw new Error(ee);if(!n)throw new Error(te);if(!e)throw new Error(ne);if(i&&(i.innerHTML=e,a=i.querySelector(r)),!a)throw new Error(re);return a.setAttribute("dataset-name",t),[2,a]}})})}(e)]:[3,2];case 1:return[2,t.sent()];case 2:return[2,function(e){var t=e.name,n=e.template,r=t&&n&&document.createElement(J),o=null;if(!t)throw new Error(K);if(!n)throw new Error(X);if(r&&(r.innerHTML=n,o=r.firstElementChild),!o)throw new Error(Y);return o.dataset.name=t,o}(e)]}})})}};try{oe||(window.VamtigerBrowserMethod=ie)}catch(e){global.VamtigerBrowserMethod=oe}}();
//# sourceMappingURL=vamtiger-browser-method.js.map
