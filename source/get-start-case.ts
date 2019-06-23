import {
    IGetStartCase,
    regex,
    StringConstant
} from './types';

const { nothing, space } = StringConstant;
const { uppercase } = regex;

const getCamelCase = {
    camelCase
}

export default function ({ input, from }: IGetStartCase) {
    const startCase = getCamelCase[from]({ input, from });

    return startCase;
}

function camelCase({ input }: IGetStartCase) {
    const characters = Array.from(input);
    const characterSets = [] as string[];

    let characterSet: string[] = [];
    let startCase: string;

    characters.forEach((character) => {
        if (!character.match(uppercase)) {
            characterSet.push(character);
        } else  {
            characterSets.push(getTitleCase(characterSet));

            characterSet = [character];
        }
    });

    characterSets.push(getTitleCase(characterSet));

    startCase = characterSets.join(space);

    return startCase;
}

function getTitleCase(characterSet: string[]) {
    const titleCase = [characterSet[0].toUpperCase()]
        .concat(characterSet.slice(1))
        .join(nothing);

    return titleCase;
}