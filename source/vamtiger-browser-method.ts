import * as loadTsLib from './load-ts-lib';
import loadScript from './load-script';
import loadShadowStylesheet from './load-shadow-stylesheet';
import { ErrorMessage } from './types';

const { windowPropertyNotSet } = ErrorMessage;
const VamtigerBrowserMethod = {
    loadScript,
    loadTsLib,
    loadShadowStylesheet
};
import { LocalScriptParams } from './types'

loadTsLib;

try {
    window.VamtigerBrowserMethod = VamtigerBrowserMethod;
} catch(error) {
    global.VamtigerBrowserMethod = VamtigerBrowserMethod;
}