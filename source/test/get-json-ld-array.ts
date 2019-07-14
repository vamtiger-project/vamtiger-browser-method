import { expect } from 'chai';
import getJsonLdArray from '../get-json-ld-array';

const { parse } = JSON;
const selector = '[data-name="https://vamtiger-project.github.io/vamtiger-mental-health-botswana-json-ld/build/vamtiger-mental-health-botswana-2018-json-ld.js"]';

export default () => describe.skip('getJsonLdArray', function () {
    it('jsonLd arrray', async function () {
        const { head } = document;
        const script = head.querySelector<HTMLScriptElement>(selector);
        const jsonLd = script && parse(script.innerHTML);

        await getJsonLdArray({ jsonLd });
    });
});