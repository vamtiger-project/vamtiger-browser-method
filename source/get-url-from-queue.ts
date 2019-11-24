import {
    IGetUrlFromQueue
} from './types';

export default function (params: IGetUrlFromQueue) {
    const { VamtigerBrowserMethod } = self;
    const { queue } = VamtigerBrowserMethod;
    const { url: urlPattern } = params;
    const urlRegex = new RegExp(urlPattern);
    const urls = Array.from(queue.keys());
    const url = urls.find(currentUrl => currentUrl.match(urlRegex))
        || '';

    return url;
}