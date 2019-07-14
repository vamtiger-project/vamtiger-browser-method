import {
    CacheName
} from './types';

const { vamtigerBrowserMethod: cacheName } = CacheName;

export default async function () {
    const cache = await caches.open(cacheName).catch(handleError) || undefined;

    return cache;
}

function handleError(error: Error) {
    console.warn(error.message);
}