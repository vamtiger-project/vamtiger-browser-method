import {
    IGetJsonLdArray,
    IGetJsonLdArrayGetEntry,
    StringConstant,
    regex
} from './types';
import {
    jsonLdEntryValueType
} from './config';
import getTabLink from './get-tab-link';

const { requestIdleCallback } = self;
const { nothing, slash } = StringConstant;
const { leadingAt, remoteUrl } = regex;

export default function (params: IGetJsonLdArray) {return new Promise(async (resolve: (jsonLdArray: string[][]) => void, reject) => {
    if (requestIdleCallback) {
        requestIdleCallback(() => getJsonLdArray(params).then(resolve));
    } else {
        getJsonLdArray(params).then(resolve);
    }
})}

export async function getJsonLdArray({ jsonLd: currentJsonLd }: IGetJsonLdArray) {
    const jsonLd = getJsonLd({
        jsonLd: currentJsonLd
    });
    const keys = Object.keys(jsonLd);
    const entries = await Promise.all(keys.map(key => getEntry({key, value: jsonLd[key]})));
    const jsonLdArray = [] as string[][];

    entries.forEach(entries => entries.forEach(entry => jsonLdArray.push(entry)));

    return jsonLdArray;
}

function getJsonLd({ jsonLd }: IGetJsonLdArray) {
    const { _ } = self;
    const { startCase } = _;
    const {
        '@context': context = undefined,
        '@type': type = undefined
    } = jsonLd;
    const typeLinkHref = context && type && [
        context,
        type
    ].join(slash);
    const typeLinkText = type && startCase(type);
    const typeLink = getTabLink({
        href: typeLinkHref,
        text: typeLinkText
    });

    if (typeLink) {
        jsonLd['@type'] = typeLink;
    }

    return jsonLd;
}

async function getEntry({key, value}: IGetJsonLdArrayGetEntry) {
    const { _ } = self;
    const { startCase } = _;
    const entryValue = jsonLdEntryValueType.has(typeof value) && value as string | number | boolean;
    const valueArray = Array.isArray(value) && value || typeof value === 'object' && [value];
    const nestedEntries = valueArray && await Promise.all(valueArray.map(jsonLd => getJsonLdArray({ jsonLd })));
    const entry = [[startCase( key.replace(leadingAt, nothing)), entryValue ? getEntryValue(entryValue) : nothing]];

    nestedEntries && nestedEntries.forEach(nestedEntry => nestedEntry.forEach(currentNestedEntry => entry.push(currentNestedEntry)));

    return entry;
}

function getEntryValue(value: string | number | boolean) {
    const valueString = value.toString().trim();
    const linkHref = valueString.match(remoteUrl) && valueString;
    const linkText = linkHref && valueString && valueString.split(slash).pop();
    const link = linkHref && linkText && getTabLink({
        href: linkHref,
        text: linkText
    });
    const entryValue = link || valueString;

    return entryValue;
}