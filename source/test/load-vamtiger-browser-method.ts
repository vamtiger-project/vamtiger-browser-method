import { expect } from 'chai';
import {
    EventName
} from '../types';
import loadScript from '../load-script';

const src = 'vamtiger-browser-method.js.json.js';

export default () => describe('load vamtiger-browser-method', function () {
    it('load script', loadScriptTest);
    it('window.VamtigerBrowserMethod', vamtigerBrowserMethodTest);
});

function loadScriptTest() {return new Promise((resolve, reject) => {
    addEventListener(EventName.vamtigerBrowserMethodReady, resolve);

    loadScript({name: src, src});
})}

function vamtigerBrowserMethodTest() {return new Promise((resolve, reject) => {
    const { VamtigerBrowserMethod } = window;

    expect(VamtigerBrowserMethod).to.be.ok;

    resolve();
})}