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
    it('load json script', loadScriptTest);

    it('load javascript', loadJavascriptTest);

    it('window.VamtigerBrowserMethod', vamtigerBrowserMethodTest);
});

function loadScriptTest() {
    const params = {
        src,
        name: src,
        transpileJs: true,
        removeFromDom: true
    };

    return loadScript(params);
}

function loadJavascriptTest() {return new Promise((resolve, reject) => {
    const script = document.querySelector<HTMLScriptElement>(selector);
    const jsonText = script && script.innerHTML;
    const data = jsonText && parse(jsonText) as IJsonScriptData;
    const js = data && data.text;
    const params = js && {
        name,
        js
    };

    if (!params) {
        return reject(new Error('No params'));
    }

    return loadScript(params).then(resolve);
})}

function vamtigerBrowserMethodTest() {return new Promise((resolve, reject) => {
    const { VamtigerBrowserMethod } = window;

    expect(VamtigerBrowserMethod).to.be.ok;

    resolve();
})}