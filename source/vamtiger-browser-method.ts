import * as loadTsLib from './load-ts-lib';
import loadScript from './load-script';
import { ErrorMessage } from './types';

const { windowPropertyNotSet } = ErrorMessage;
const VamtigerBrowserMethod = {
    loadScript
};
import { LocalScriptParams } from './types'

loadTsLib;

try {
    window.VamtigerBrowserMethod = VamtigerBrowserMethod;
} catch(error) {
    global.VamtigerBrowserMethod = VamtigerBrowserMethod;
}