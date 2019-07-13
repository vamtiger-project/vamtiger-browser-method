import {
    FetchEvent
} from './types';
import getCache from './get-cache';
import updateRequestCache from './update-request-cache';

export default async function ({request}: FetchEvent) {
    const cache = await getCache();
    const response = await cache.match(request);

    if (response) {
        updateRequestCache({request});
    }

    return response;
}