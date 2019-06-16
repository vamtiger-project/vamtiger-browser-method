import {
    IGetBabelJs,
    IAnyObject,
    ScriptType,
    ScriptAttribute,
    StringConstant
} from './types';
import { babel } from './config';

const { nothing } = StringConstant;

export default async function ({ url, js }: IGetBabelJs) {
    const { fetch, Babel } = self;
    const { transform } = Babel || { transform: undefined }
    const code = transform && (js || url && await fetch(url)
        .then(response => response && response.text())
        .catch(handleError));
    const { code: transpiledCode } = code && code.trim() && transform && transform(code, babel) || { code: '' };
    const transpiledJs: string = transpiledCode || js;

    return transpiledJs;
}

function handleError(error: Error) {
    const transpiledJs = '';

    console.warn(error.message);
    console.warn(error.stack);

    return transpiledJs;
}