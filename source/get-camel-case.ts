import {
    regex,
    StringConstant
} from './vamtiger-browser-method';

export default function (input: string) {
    const { nothing } = StringConstant;
    const { nonWord } = regex;
    const camelCase = input
        .split(nonWord)
        .map((word, index) => !index && word.toLowerCase() || word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
        .join(nothing);

    return camelCase
}