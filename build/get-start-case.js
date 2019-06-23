"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var nothing = types_1.StringConstant.nothing, space = types_1.StringConstant.space;
var uppercase = types_1.regex.uppercase;
var getCamelCase = {
    camelCase: camelCase
};
function default_1(_a) {
    var input = _a.input, from = _a.from;
    var startCase = getCamelCase[from]({ input: input, from: from });
    return startCase;
}
exports.default = default_1;
function camelCase(_a) {
    var input = _a.input;
    var characters = Array.from(input);
    var characterSets = [];
    var characterSet = [];
    var startCase;
    characters.forEach(function (character) {
        if (!character.match(uppercase)) {
            characterSet.push(character);
        }
        else {
            characterSets.push(getTitleCase(characterSet));
            characterSet = [character];
        }
    });
    characterSets.push(getTitleCase(characterSet));
    startCase = characterSets.join(space);
    return startCase;
}
function getTitleCase(characterSet) {
    var titleCase = [characterSet[0].toUpperCase()]
        .concat(characterSet.slice(1))
        .join(nothing);
    return titleCase;
}
//# sourceMappingURL=get-start-case.js.map