import {
    IGetJsonLdArray,
    IGetJsonLdArrayGetEntry,
    StringConstant
} from './types';

const { nothing } = StringConstant

export default function getJsonLdArray({ jsonLd }: IGetJsonLdArray) {
    const keys = Object.keys(jsonLd);
    const entries = keys.map(key => getEntry({key, value: jsonLd[key]}));
    const jsonLdArray = [] as string[][];

    entries.forEach(entries => entries.forEach(entry => jsonLdArray.push(entry)));

    return jsonLdArray;
}

function getEntry({key, value}: IGetJsonLdArrayGetEntry) {
    const valueString = typeof value === 'string' && value;
    const valueArray = Array.isArray(value) && value || typeof value === 'object' && [value];
    const nestedEntries = valueArray && valueArray.map(jsonLd => getJsonLdArray({ jsonLd }));
    const entry = [[key, valueString ? valueString.toString().trim() : nothing]];

    nestedEntries && nestedEntries.forEach(nestedEntry => nestedEntry.forEach(currentNestedEntry => entry.push(currentNestedEntry)));

    return entry;
}