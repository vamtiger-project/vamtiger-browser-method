import { expect } from 'chai';

const relativeUrl = location.origin.match(new RegExp('http://localhost', 'i')) &&
    'test/test-method.js' || 'vamtiger-browser-method/build/test/test-method.js';

export default () => describe('loadMethod', function () {
    it('script', loadMethodTest);
});

async function loadMethodTest() {
    const { VamtigerBrowserMethod } = self;
    const { loadMethod } = VamtigerBrowserMethod;
    const methodLoaded = await loadMethod({
        relativeUrl,
        name: 'test'
    });
    const namedMethod = VamtigerBrowserMethod.method.test;

    expect(namedMethod).to.be.ok;
}