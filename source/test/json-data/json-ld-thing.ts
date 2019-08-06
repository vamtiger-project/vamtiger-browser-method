import {
    CustomEventName,
    HandleJsonLdAction
} from '../../types';

const { vamtigerBrowserMethod: eventName } = CustomEventName;
const { dequeue: action } = HandleJsonLdAction;
const params = {
    key: 'http://127.0.0.1:8000/test/json-data/json-ld-thing.js'
};

load();

export default async function load() {
    const { VamtigerBrowserMethod } = self;
    const jsonLd = {
        '@context': 'http://schema.org/',
        '@type': 'Thing',
        name: 'Another thing',
        description: 'Describing another thing'
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