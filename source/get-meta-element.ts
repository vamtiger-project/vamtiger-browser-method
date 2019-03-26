import {
    IGetMetaElement,
    StringConstant,
    regex
} from './types';

const { nothing } = StringConstant;

export default function ({ selector = nothing, properties = {}, dataset = {}, attributes = {}}: IGetMetaElement) {
    const { id } = properties;
    const { head } = document;
    const attributeKeys = Object.keys(attributes);
    const existingMetaElement = id && ((window as any)[id]
        || selector && head.querySelector(selector)) as HTMLMetaElement;
    const newMetaElment = !existingMetaElement && document.createElement('meta');
    const metaElement = (existingMetaElement || newMetaElment) as HTMLMetaElement;

    let dataKey: string;

    if (newMetaElment) {
        Object.assign(newMetaElment, properties);
        Object.assign(newMetaElment.dataset, dataset);

        head.appendChild(newMetaElment);
    }

    attributeKeys.forEach(key => !metaElement.hasAttribute(key) && metaElement.setAttribute(dataKey, attributes[key]));

    return metaElement;
}