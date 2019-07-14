import { expect } from 'chai';

const relativeUrl = location.origin.match(new RegExp('http://localhost', 'i')) &&
    'test/test-method.js' || 'vamtiger-browser-method/build/test/test-method.js';

export default () => describe('getMethodResult', function () {
    before(setup);

    it('no params', noParamsTest);
});

async function setup() {
    const { VamtigerBrowserMethod } = self;
    const { loadMethod } = VamtigerBrowserMethod;

    await loadMethod({
        relativeUrl,
        name: 'test'
    });
}

async function noParamsTest() {
    const { VamtigerBrowserMethod } = self;
    const namedMethod = VamtigerBrowserMethod.method.test;
    const result = namedMethod && await namedMethod({param3: 3, param4: 4});

    console.log(result);

    expect(result).to.be.ok;
}