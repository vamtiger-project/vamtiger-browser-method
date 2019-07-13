import {
    FetchEvent
} from './types';
import getCache from './get-cache';

export default async function ({request}: FetchEvent) {
    const cache = await getCache();
    const response = await fetch(request);
    const cacheResponse = response
        && (response.status === 200 || response.type === 'opaque')
        && response.clone();

    if (cacheResponse) {
        await cache.put(request, cacheResponse).catch(handleError);;
    }

    return response;
}

function handleError(error: Error) {
    console.warn(error.message);
}