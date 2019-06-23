import {
    StringConstant,
    Dependency,
    DependencyKey
} from './types';

const { slash } = StringConstant;

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

export const dependencies = (Object.keys(Dependency) as DependencyKey[]).map(key => Dependency[key]);