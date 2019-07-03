import {
    DataAttribute
} from './types';
import {
    intersectionObserver as config,
} from './config';

const { IntersectionObserver, requestIdleCallback } = self;
const defaultObserver = IntersectionObserver && new IntersectionObserver(handleIntersect, config);

export default function () {
    return defaultObserver;
}

function handleIntersect(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    entries.forEach(entry => {
        if (requestIdleCallback) {
            requestIdleCallback(() => handleIntersectElement(entry));
        } else {
            setTimeout(() => handleIntersectElement(entry), 0);
        }
    })
}

function handleIntersectElement(entry: IntersectionObserverEntry) {
    const {
        isIntersecting,
        intersectionRatio,
        target: element,
        isVisible
    } = entry as IntersectionObserverEntry & {isVisible: boolean;};
    const { dataset } = element as HTMLElement;

    if (isIntersecting) {
        dataset[DataAttribute.visible] = intersectionRatio.toString();
    } else {
        delete dataset[DataAttribute.visible];
    }
}