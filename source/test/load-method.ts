import { expect } from 'chai';

const relativeUrl = 'vamtiger-browser-method-get-responsive-column-clip-paths.js';

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
}