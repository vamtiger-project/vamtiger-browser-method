import {
    FetchEvent,
    regex
} from './types';
import getFetchResponse from './get-fetch-response';
import getCachedFetchResponse from './get-cached-fetch-response';

export default async function (event: FetchEvent) {
    const cachedResponse = await getCachedFetchResponse(event);
    const response = cachedResponse || await getFetchResponse(event);

    return response as Response;
}

export function isValidProtocol({request}: FetchEvent) {
    const { url } = request;
    const { protocol } = new URL(url);
    const validProtocol = protocol.match(regex.remoteUrl);

    return validProtocol;
}