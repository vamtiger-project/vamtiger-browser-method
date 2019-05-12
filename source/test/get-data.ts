import { expect } from 'chai';

interface IJsonLd {
    '@context': 'http://schema.org/',
    '@type': 'Painting'
}

interface IData {
    jsonLd: IJsonLd[];
}

const { VamtigerBrowserMethod } = window;
const { getData  } = VamtigerBrowserMethod;

export default () => describe('getData', function () {
    it('json-ld', jsonLdTest);
});

async function jsonLdTest() {
    const data = await getData({
        jsonLd: 'https://unpkg.com/test-json-ld'
    }) as IData;
    const { jsonLd: currentJsonLd } = data;
    const [ jsonLd ] = currentJsonLd;

    expect(jsonLd).to.be.ok;
    expect(jsonLd['@context']).to.equal('http://schema.org/');
    expect(jsonLd['@type']).to.equal('Painting');
}