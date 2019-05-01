import { setup, run } from 'mocha';
import * as tslib from '../../node_modules/tslib/tslib';
import loadScript from './load-script';
import defineCustomElement from './define-custom-element';
import getElement from './get-element';

tslib;

setup('bdd');

addEventListener('load', test);

function test() {
    loadScript();
    defineCustomElement();
    getElement();

    run();
}