"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var nothing = types_1.StringConstant.nothing;
function default_1(_a) {
    var _b = _a.selector, selector = _b === void 0 ? nothing : _b, _c = _a.properties, properties = _c === void 0 ? {} : _c, _d = _a.dataset, dataset = _d === void 0 ? {} : _d, _e = _a.attributes, attributes = _e === void 0 ? {} : _e;
    var id = properties.id;
    var head = document.head;
    var lastMetaElement = head.querySelector(types_1.Selector.lastMetaElement);
    var attributeKeys = Object.keys(attributes);
    var existingMetaElement = id && (window[id]
        || selector && head.querySelector(selector));
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
exports.default = default_1;
//# sourceMappingURL=get-meta-element.js.map