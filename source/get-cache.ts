import {
    CacheName
} from './types';

const { vamtigerBrowserMethod: cacheName } = CacheName;

export default async function () {
    const cache = await caches.open(cacheName);

    return cache;
}