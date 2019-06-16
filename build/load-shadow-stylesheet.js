"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
function default_1(_a) {
    var css = _a.css, element = _a.element;
    var shadowRoot = element.shadowRoot, hostName = element.localName;
    var lastStylesheet = shadowRoot && shadowRoot.querySelector(types_1.Selector.lastStylesheet);
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
exports.default = default_1;
//# sourceMappingURL=load-shadow-stylesheet.js.map