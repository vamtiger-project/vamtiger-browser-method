import { expect } from 'chai';

interface IJsonLd {
    test: 'test'
}

const { VamtigerBrowserMethod } = window;
const { getData  } = VamtigerBrowserMethod;

export default () => describe('getData', function () {
    it('json-ld', jsonLdTest);
});

async function jsonLdTest() {
    const jsonLd = await getData<IJsonLd>({
        jsonLd: 'test/json-ld.js'
    });

    expect(jsonLd).to.be.ok;
    expect(jsonLd.test).to.equal('test');
}