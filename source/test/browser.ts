import { setup, run } from 'mocha';
import loadScript from './load-script';

setup('bdd');

addEventListener('load', test);

function test() {
    loadScript();

    run();
}