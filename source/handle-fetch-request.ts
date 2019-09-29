import {
    FetchEvent
} from './types';
import getFetchResponse from './get-fetch-response';
import getCachedFetchResponse from './get-cached-fetch-response';

export default async function (event: FetchEvent) {
    console.log(event);
    const cachedResponse = await getCachedFetchResponse(event);
    const response = cachedResponse || await getFetchResponse(event);
    console.log(response);

    return response;
}