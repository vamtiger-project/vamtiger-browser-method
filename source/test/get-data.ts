import { expect } from 'chai';

interface IJsonLd {
    '@context': 'http://schema.org/',
    '@type': 'Painting'
}

interface IData {
    jsonLd: IJsonLd[];
}

export default () => describe('getData', function () {
    this.timeout(5000);
    it('json-ld', jsonLdTest);
});

async function jsonLdTest() {
    const { VamtigerBrowserMethod } = window;
    const { getData  } = VamtigerBrowserMethod;
    const data = await getData({
        jsonLd: 'https://unpkg.com/vamtiger-facebook-icon-json-ld@latest'
    }) as IData;
    const { jsonLd: currentJsonLd } = data;
    const [ jsonLd ] = currentJsonLd;

    expect(jsonLd).to.be.ok;
    expect(jsonLd['@context']).to.equal('http://schema.org');
    expect(jsonLd['@type']).to.equal('ImageObject');
}