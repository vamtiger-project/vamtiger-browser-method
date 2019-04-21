import * as tslib from 'tslib/tslib';
import { TsLibKey } from './vamtiger-browser-method';

function loadTsLib() {
    const tsLibKeys = Object.keys(tslib) as TsLibKey[];

    tsLibKeys.forEach(key => {
        if (!window[key]) {
            window[key] = tslib[key];
        }
    });
}

loadTsLib();