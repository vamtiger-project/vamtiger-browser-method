import { expect } from 'chai';
import { StringConstant } from '../types';

const { slash } = StringConstant;
const emptyScriptSrc = [
    'test',
    'empty-script.js'
].join(slash);
const emptyScriptsSrcs = new Array(10).fill(emptyScriptSrc) as string[];

export default () => describe('loadScript', function () {
    const { VamtigerBrowserMethod, location } = window;
    const { head } = document;
    const { loadScript } = VamtigerBrowserMethod;
    const selector = `script[src="${emptyScriptSrc}"]`;

    before(async function () {
        await Promise.all(
            emptyScriptsSrcs.map(src => loadScript({ src }))
        );
    });
    
    it('Append to Document Head', async function () {
        const script = head.querySelector(selector);

        expect(script).to.be.ok;
    });

    it('Once', async function () {
        const scripts = Array.from(head.querySelectorAll(selector));

        expect(scripts.length).to.equal(1);
    });
})