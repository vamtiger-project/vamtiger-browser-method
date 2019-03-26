import {
    regex,
    StringConstant
} from './types';

const { nothing } = StringConstant;
const { nonWord } = regex;

export default (input: string) => input
    .split(nonWord)
    .map((word, index) => !index && word.toLowerCase() || word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
    .join(nothing);