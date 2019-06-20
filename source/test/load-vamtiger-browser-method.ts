import { expect } from 'chai';
import {
    IJsonScriptData
} from '../types';
import loadScript from '../load-script';

const { parse } = JSON;
const src = 'vamtiger-browser-method.js.json.js';
const selector = `[data-name='vamtiger-browser-method.js.json']`;
const name = 'vamtiger-browser-method.js';

export default () => describe('load vamtiger-browser-method', function () {
    it('window.VamtigerBrowserMethod', vamtigerBrowserMethodTest);
});

function vamtigerBrowserMethodTest() {return new Promise((resolve, reject) => {
    const { VamtigerBrowserMethod } = window;

    expect(VamtigerBrowserMethod).to.be.ok;

    resolve();
})}