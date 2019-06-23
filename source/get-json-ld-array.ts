import {
    IGetJsonLdArray,
    IGetJsonLdArrayGetEntry,
    StringConstant,
    regex
} from './types';
import {
    jsonLdEntryValueType
} from './config';
import getStartCase from './get-start-case';

const { nothing } = StringConstant;
const { leadingAt } = regex;

export default function getJsonLdArray({ jsonLd }: IGetJsonLdArray) {
    const keys = Object.keys(jsonLd);
    const entries = keys.map(key => getEntry({key, value: jsonLd[key]}));
    const jsonLdArray = [] as string[][];

    entries.forEach(entries => entries.forEach(entry => jsonLdArray.push(entry)));

    return jsonLdArray;
}

function getEntry({key, value}: IGetJsonLdArrayGetEntry) {
    const entryValue = jsonLdEntryValueType.has(typeof value) && value;
    const valueArray = Array.isArray(value) && value || typeof value === 'object' && [value];
    const nestedEntries = valueArray && valueArray.map(jsonLd => getJsonLdArray({ jsonLd }));
    const entry = [[getStartCase({input: key.replace(leadingAt, nothing), from: 'camelCase'}), entryValue ? entryValue.toString().trim() : nothing]];

    nestedEntries && nestedEntries.forEach(nestedEntry => nestedEntry.forEach(currentNestedEntry => entry.push(currentNestedEntry)));

    return entry;
}