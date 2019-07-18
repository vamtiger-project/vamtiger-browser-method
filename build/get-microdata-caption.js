"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var get_template_1 = require("./get-template");
var nothing = types_1.StringConstant.nothing, slash = types_1.StringConstant.slash;
function default_1(_a) {
    var imageData = _a.imageData, fieldKey = _a.fieldKey;
    var field = imageData[fieldKey];
    var fieldData = Array.isArray(field) && field || [field] || [];
    var caption = field && get_template_1.default({
        selector: types_1.Selector.linkedDataCaption,
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
            ].join(slash);
            currentCaption = get_template_1.default({
                selector: types_1.Selector.linkedDataCaption
            });
            if (currentCaption) {
                currentCaption.setAttribute('itemscope', nothing);
                itemtype && currentCaption.setAttribute('itemtype', itemtype);
                currentProducerCaptionElements = [
                    currentFieldData.name && get_template_1.default({
                        selector: types_1.Selector.linkedDataCaptionElement,
                        properties: {
                            innerHTML: currentFieldData.name
                        },
                        attributes: {
                            itemprop: 'name'
                        }
                    }),
                    currentFieldData.description && get_template_1.default({
                        selector: types_1.Selector.linkedDataCaptionElement,
                        properties: {
                            innerHTML: currentFieldData.description
                        },
                        attributes: {
                            itemprop: 'description'
                        }
                    }),
                    currentFieldData.url && get_template_1.default({
                        selector: types_1.Selector.a,
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
exports.default = default_1;
//# sourceMappingURL=get-microdata-caption.js.map