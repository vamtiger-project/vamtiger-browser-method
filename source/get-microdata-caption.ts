import {
    IGetMicrodataCaption,
    IAnyObject,
    Selector,
    StringConstant
} from './types';
import getTemplate from './get-template';

const { nothing, slash } = StringConstant;

export default function ({ imageData, fieldKey }: IGetMicrodataCaption) {
    const field = imageData[fieldKey] as IAnyObject | undefined;
    const fieldData = Array.isArray(field) && field || [field] || [];
    const caption = field && getTemplate({
        selector: Selector.linkedDataCaption,
        attributes: {
            itemprop: fieldKey
        }
    });

    let itemtype: string;
    let currentCaption: HTMLElement | null;
    let currentProducerCaptionElements: (HTMLElement | null)[]

    fieldData.forEach(currentFieldData => {
        if (currentFieldData) {
            itemtype = currentFieldData['@context'] && currentFieldData['@type'] && [
                currentFieldData['@context'],
                currentFieldData['@type']
            ].join(slash);
            currentCaption = getTemplate({
                selector: Selector.linkedDataCaption
            });

            if (currentCaption) {
                currentCaption.setAttribute('itemscope', nothing);
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

                currentProducerCaptionElements.forEach(currentElement => currentElement && currentCaption && currentCaption.appendChild(currentElement));

                caption && caption.appendChild(currentCaption);
            }
        }
    });

    return caption
}