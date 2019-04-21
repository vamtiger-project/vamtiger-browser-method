import { setup, run } from 'mocha';
import * as loadTsLib from '../load-ts-lib';
import loadScript from './load-script';
import defineCustomElement from './define-custom-element';
import getElement from './get-element';

loadTsLib;

setup('bdd');

addEventListener('load', test);

function test() {
    loadScript();
    defineCustomElement();
    getElement();

    run();
}