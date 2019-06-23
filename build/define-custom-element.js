"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var unsupportedFeature = types_1.ErrorMessage.unsupportedFeature, customElementAreadyDefined = types_1.ErrorMessage.customElementAreadyDefined;
function defineCustomElement(_a) {
    var name = _a.name, constructor = _a.constructor, ignore = _a.ignore;
    var customElements = self.customElements;
    var define = customElements && customElements.define;
    var existingElement = define && customElements.get && customElements.get(name);
    if (define && !existingElement) {
        customElements.define(name, constructor);
    }
    else if (existingElement) {
        throw new Error(customElementAreadyDefined + ": " + name);
    }
    else if (!ignore) {
        defineCustomElement({ name: name, constructor: constructor, ignore: true });
    }
    else {
        throw new Error(unsupportedFeature + ": Custom Elements - " + name);
    }
}
exports.default = defineCustomElement;
//# sourceMappingURL=define-custom-element.js.map