import * as loadTsLib from './load-ts-lib';
import loadScript from './load-script';
import { ErrorMessage } from './types';

const { windowPropertyNotSet } = ErrorMessage;

loadTsLib;

try {
    window.VamtigerBrowserMethod = {
        loadScript
    };
} catch(error) {
    console.warn(error);
    console.warn(`${windowPropertyNotSet}: VamtigerBrowserMethod`);
}