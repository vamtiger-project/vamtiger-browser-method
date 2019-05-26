import { setup, run } from 'mocha';
import * as tslib from '../../node_modules/tslib/tslib';
import loadVamtigerBrowserMethod from './load-vamtiger-browser-method';;
import loadScript from './load-script';
import defineCustomElement from './define-custom-element';
import getElement from './get-element';
import getData from './get-data';

tslib;

setup('bdd');

addEventListener('load', test);

function test() {
    loadVamtigerBrowserMethod();
    loadScript();
    defineCustomElement();
    getElement();
    getData();

    run();
}