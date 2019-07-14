import { expect } from 'chai';

export default () => describe('loadMethod', function () {
    it('script', loadMethodTest);
});

async function loadMethodTest() {
    const { VamtigerBrowserMethod } = self;
    const { loadMethod } = VamtigerBrowserMethod;
    const methodLoaded = await loadMethod({
        relativeUrl: 'test/test-method.js',
        name: 'test'
    });
    const namedMethod = VamtigerBrowserMethod.method.test;
    const result = namedMethod && await namedMethod({param1: 1, param2: 2});

    console.log(result);

    expect(methodLoaded).to.be.true;
}