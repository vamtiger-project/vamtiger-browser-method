import {
    Dependency
} from './types';

export const babel = {
    presets: ['es2015']
};

export const jsonLdEntryValueType = new Set([
    typeof 1,
    typeof '',
    typeof true
]);

export const dependencyPaths = Array.from(new Set([
    'lodash/lodash.min.js'
]));

export const getDependencies = () => [
    !self._ && Dependency.lodash || ''
].filter(dependency => dependency);

export const intersectionObserverThreshold = getIntersectionObserverThreshold(5);

export const intersectionObserver = {
    root: null,
    rootMargin: '0px',
    threshold: intersectionObserverThreshold
};

export const serviceWorker = {
    scope: '/'
};

export const serviceWorkerClients = {
    includeUncontrolled: true
}

function getIntersectionObserverThreshold(length: number) {
    const step = 1 / length;
    const threshold = Array(length)
        .fill(undefined)
        .map((value, index) => index ? (index + 1) * step : index);

    return threshold;
}