import {
    IUpdateRequestCache
} from './types';
import getCache from './get-cache';

export default async function ({request}: IUpdateRequestCache) {
    const cache = await getCache();
    const response = await fetch(request).catch(handleError);
    const updateCache = response
        && (response.status === 200 || response.type === 'opaque');

    if (updateCache && response) {
        await cache.put(request, response).catch(handleError);
    }
}

function handleError(error: Error) {
    console.warn(error.message);
}