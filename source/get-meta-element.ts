import {
    IGetMetaElement,
    StringConstant,
    Selector
} from './vamtiger-browser-method';

export default function ({ selector = '', properties = {}, dataset = {}, attributes = {}}: IGetMetaElement) {
    const { nothing } = StringConstant;
    const { id } = properties;
    const { head } = document;
    const lastMetaElement = head.querySelector<HTMLMetaElement>(Selector.lastMetaElement);
    const attributeKeys = Object.keys(attributes);
    const existingMetaElement = id && ((window as any)[id]
        || selector && head.querySelector(selector)) as HTMLMetaElement;
    const newMetaElment = !existingMetaElement && document.createElement('meta');
    const metaElement = (existingMetaElement || newMetaElment) as HTMLMetaElement;

    let dataKey: string;

    if (newMetaElment) {
        Object.assign(newMetaElment, properties);
        Object.assign(newMetaElment.dataset, dataset);

        if (lastMetaElement && lastMetaElement.nextElementSibling) {
            head.insertBefore(
                newMetaElment,
                lastMetaElement.nextElementSibling
            );
        } else {
            head.appendChild(newMetaElment);
        }
    }

    attributeKeys.forEach(key => !metaElement.hasAttribute(key) && metaElement.setAttribute(dataKey, attributes[key]));

    return metaElement;
}