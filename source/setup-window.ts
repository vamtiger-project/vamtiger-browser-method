import {
    ElementId,
    DataAttribute,
    StringConstant
} from './types';
import getWorker from './get-worker';
import isWindow from './is-window';
import isTextMode from './is-text-mode';
import getIntersectionObserver from './get-intersection-observer';

const { nothing } = StringConstant;

export default function () {
    isWindow() && setupWindow();
}

async function setupWindow() {
    const { head } = document;
    const { VamtigerBrowserMethod } = self;
    const { metaElement = document.createElement('meta') } = VamtigerBrowserMethod;
    const customeElementMetaElement = document.createElement('meta');
    const textMode = isTextMode();

    customeElementMetaElement.dataset[DataAttribute.customElementName] = nothing;

    metaElement.id = ElementId.metaElement;

    metaElement.appendChild(customeElementMetaElement);

    head.appendChild(metaElement);

    VamtigerBrowserMethod.metaElement = metaElement;

    VamtigerBrowserMethod.worker = await getWorker();

    VamtigerBrowserMethod.textMode = textMode;

    VamtigerBrowserMethod.intersectionObserver = getIntersectionObserver();
}