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
    before(function () {
        const { documentElement } = document;
        const { dataset } = documentElement;

        dataset.vamtigerTextMode = '';
    });

    it('json-ld', jsonLdTest);
});

async function jsonLdTest() {
    const { VamtigerBrowserMethod } = window;
    const { getData, intersectionObserver  } = VamtigerBrowserMethod;
    const data = await getData({
        jsonLd: 'https://vamtiger-project.github.io/vamtiger-mental-health-botswana-json-ld/build/vamtiger-mental-health-botswana-2018-json-ld.js',
        textMode: true
    }) as IData;
    const { jsonLd: currentJsonLd } = data;
    const [ jsonLd ] = currentJsonLd;
    const element = document.querySelector('vamtiger-json-ld-viewer');

    expect(jsonLd).to.be.ok;
    expect(jsonLd['@context']).to.equal('http://schema.org');
    expect(jsonLd['@type']).to.equal('VisualArtwork');
}