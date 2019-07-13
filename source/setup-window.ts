import {
    ElementId,
    DataAttribute,
    StringConstant,
    MessageAction
} from './types';
import getWorker from './get-worker';
import isWindow from './is-window';
import isTextMode from './is-text-mode';
import getIntersectionObserver from './get-intersection-observer';
import getServiceWorkerRegistration from './get-service-worker-registration';
import handleMessage from './handle-message';

const { nothing } = StringConstant;

export default function () {
    if (isWindow()) {
        setEventListeser();

        setupWindow();
    }
}

function setEventListeser() {
    const { serviceWorker } = navigator;

    serviceWorker && serviceWorker.addEventListener('message', handleMessage);
}

async function setupWindow() {
    const { serviceWorker } = navigator;
    const { head } = document;
    const { VamtigerBrowserMethod } = self;
    const { metaElement = document.createElement('meta') } = VamtigerBrowserMethod;
    const customeElementMetaElement = document.createElement('meta');
    const textMode = isTextMode();
    const serviceWorkerRegistration = await getServiceWorkerRegistration();
    const messageChannel = new MessageChannel();
    const { port1 } = messageChannel;

    customeElementMetaElement.dataset[DataAttribute.customElementName] = nothing;

    metaElement.id = ElementId.metaElement;

    metaElement.appendChild(customeElementMetaElement);

    head.appendChild(metaElement);

    VamtigerBrowserMethod.metaElement = metaElement;

    VamtigerBrowserMethod.worker = await getWorker();

    VamtigerBrowserMethod.textMode = textMode;

    VamtigerBrowserMethod.intersectionObserver = getIntersectionObserver();

    VamtigerBrowserMethod.serviceWorkerRegistration = serviceWorkerRegistration;

    VamtigerBrowserMethod.serviceWorker = serviceWorker && serviceWorker.controller || undefined;

    VamtigerBrowserMethod.messageChannel = messageChannel;

    port1.addEventListener('message', handleMessage);
}