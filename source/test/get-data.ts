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

    it.skip('json-ld', jsonLdTest);

    it('json-ld-data', jsonJsonLdDataTest);
});

async function jsonJsonLdDataTest() {
    const { VamtigerBrowserMethod } = window;
    const { getData  } = VamtigerBrowserMethod;
    const data = await getData({
        json: 'https://cdn.jsdelivr.net/npm/vamtiger-json-ld-image-infers-group-botswana-mental-health@0.0.11'
    });

    expect(data).to.be.ok;
    expect(data.jsonLd).to.be.ok;
    expect(data.jsonLd['@context']).to.be.ok;
    expect(data.json).to.be.ok;
}

async function jsonLdTest() {
    const { VamtigerBrowserMethod } = window;
    const { getData  } = VamtigerBrowserMethod;
    const data = await getData({
        jsonLd: 'https://vamtiger-project.github.io/vamtiger-mental-health-botswana-json-ld/build/vamtiger-mental-health-botswana-2018-json-ld.js',
        textMode: true
    }) as IData;
    const { jsonLd: currentJsonLd } = data;
    const [ jsonLd ] = currentJsonLd;

    expect(jsonLd).to.be.ok;
    expect(jsonLd['@context']).to.equal('http://schema.org');
    expect(jsonLd['@type']).to.equal('VisualArtwork');
}
