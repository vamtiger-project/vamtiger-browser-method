import {
    LocalHostRelativePath
} from './types';
import isLocalHost from './is-local-host';

const { vamtigerBrowserMethod: url } = LocalHostRelativePath;

export default async function() {
    const validUrl = isLocalHost() && await fetch(url)
        .then(response => response.ok)
        .catch(error => '');
    const localHostRelativeUrl = validUrl && url || '';

    return localHostRelativeUrl;
}