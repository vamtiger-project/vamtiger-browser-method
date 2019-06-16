"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var html_1 = require("./html");
var template;
var templateHtml;
var document = self.document;
var nothing = types_1.StringConstant.nothing;
if (document) {
    template = document.createElement('template');
    templateHtml = [
        html_1.default
    ].join(nothing);
    template.innerHTML = templateHtml;
}
exports.default = (function (params) {
    var selector = params.selector, _a = params.attributes, attributes = _a === void 0 ? {} : _a, _b = params.properties, properties = _b === void 0 ? {} : _b;
    var attributesKeys = Object.keys(attributes);
    var templateElement = template.content.querySelector(selector);
    var currentTemplate = templateElement && templateElement.cloneNode(true);
    if (currentTemplate) {
        Object.assign(currentTemplate, properties);
        attributesKeys.forEach(function (key) { return attributes[key] && currentTemplate.setAttribute(key, attributes[key] || ''); });
    }
    return currentTemplate;
});
//# sourceMappingURL=get-template.js.map