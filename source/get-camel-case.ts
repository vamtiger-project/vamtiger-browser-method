import {
    regex,
    StringConstant,
    IGetCamelCase
} from './types';

const { nothing } = StringConstant;
const { nonWord } = regex;
const getCamelCase = {
    kebabCase
};

export default function({ input, from }: IGetCamelCase) {
    const camelCase = getCamelCase[from]({ input, from });

    return camelCase;
}

function kebabCase({ input }: IGetCamelCase) {
    const camelCase = input
        .split(nonWord)
        .map((word, index) => !index && word.toLowerCase() || word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
        .join(nothing);

    return camelCase
}