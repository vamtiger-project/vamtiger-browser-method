import {
    CustomEventName,
    HandleJsonLdAction
} from '../../types';

const { vamtigerBrowserMethod: eventName } = CustomEventName;
const { dequeue: action } = HandleJsonLdAction;
const params = {
    key: 'test/json-data/json-ld.js',
    match: true
};

load();

export default async function load() {
    const { VamtigerBrowserMethod } = self;
    const { getData } = VamtigerBrowserMethod;
    const aboutData = await getData({
        json: 'test/json-data/json-ld-thing.js',
        dependency: true
    });
    const { jsonLd: about } = aboutData;
    const jsonLd = {
        '@context': 'http://schema.org/',
        '@type': 'Thing',
        name: 'Some thing',
        description: 'Describing some thing',
        about
    };
    const data = {
        jsonLd,
        json: {}
    };
    const event = new CustomEvent(eventName, {
        detail: {
            action,
            params: {
                ...params,
                data
            }
        }
    });

    dispatchEvent(event);
}