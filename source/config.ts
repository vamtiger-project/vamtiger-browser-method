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

export const intersectionObserverThreshold = new Array(4)
    .fill(undefined)
    .map((value, index) => (index + 1) * 0.25);

export const intersectionObserver = {
    root: null,
    rootMargin: '0px',
    threshold: intersectionObserverThreshold
};