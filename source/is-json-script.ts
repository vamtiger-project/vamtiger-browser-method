import {
    IIsJsonScript
} from './types';

const { parse } = JSON;

export default function ({ script }: IIsJsonScript) {
    const { innerHTML } = script;

    let isJson = false;

    try {
        parse(innerHTML);
        isJson = true;
    } catch(error) {
        console.warn(error);
        isJson = false;
    }

    return isJson;
}