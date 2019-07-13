import { setup, run } from 'mocha';
import * as tslib from '../../node_modules/tslib/tslib';
import loadVamtigerBrowserMethod from './load-vamtiger-browser-method';;
import loadScript from './load-script';
import defineCustomElement from './define-custom-element';
import getElement from './get-element';
import getData from './get-data';
import getJsonLdArray from './get-json-ld-array';
import intersectionObserver from './intersection-observer';

tslib;

setup('bdd');

loadVamtigerBrowserMethod();
loadScript();
defineCustomElement();
getElement();
getData();
getJsonLdArray();
intersectionObserver();

run();