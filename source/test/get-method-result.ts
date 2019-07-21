import { expect } from 'chai';

const relativeUrl = location.origin.match(new RegExp('http://localhost', 'i')) &&
    'vamtiger-browser-method-get-responsive-column-clip-paths.js' || 'vamtiger-browser-method/build/vamtiger-browser-method-get-responsive-column-clip-paths.js';

export default () => describe('getMethodResult', function () {
    before(setup);

    it('named method', noParamsTest);
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
    const namedMethod = VamtigerBrowserMethod.method.getResponsiveColumnClipPaths;
    const clipPaths = await namedMethod({
        columns: 3,
        offset: 2
    })

    expect(clipPaths).to.be.ok;
    expect(clipPaths.length).to.equal(3);
}