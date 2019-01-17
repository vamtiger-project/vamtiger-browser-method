import { setup, run } from 'mocha';
import loadScript from './load-script';
import defineCustomElement from './define-custom-element';

setup('bdd');

addEventListener('load', test);

function test() {
    loadScript();
    defineCustomElement();

    run();
}