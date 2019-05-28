import {
    HostName
} from './types';

export default function() {
    const { location } = window;
    const isLocalHost = HostName.localHost === location.hostname;

    return isLocalHost;
}