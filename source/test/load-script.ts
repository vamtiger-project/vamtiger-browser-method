import { expect } from 'chai';
import { StringConstant } from '../types';

const { slash } = StringConstant;
const emptyScriptSrc = [
    'test',
    'empty-script.js'
].join(slash);
const emptyStylesheetHref = [
    'test',
    'empty-stylesheet.css'
].join(slash);
const emptyScriptsSrcs = new Array(10).fill(emptyScriptSrc) as string[];
const emptyStylesheetHrefs = new Array(10).fill(emptyStylesheetHref) as string[];

export default () => describe('loadScript', function () {
    const { VamtigerBrowserMethod, location } = window;
    const { head } = document;
    const { loadScript } = VamtigerBrowserMethod;
    const scriptSelector = `script[src="${emptyScriptSrc}"]`;
    const linkSelector = `link[href="${emptyStylesheetHref}"]`;

    before(async function () {
        await Promise.all(
            emptyScriptsSrcs.map(src => loadScript({ src }))
        );
        await Promise.all(
            emptyStylesheetHrefs.map(href => loadScript({ href }))
        );
    });

    it('Append to Document Head', async function () {
        const script = head.querySelector(scriptSelector);
        const link = head.querySelector(linkSelector);

        expect(script).to.be.ok;
        expect(link).to.be.ok;
    });

    it('Append once per script', async function () {
        const scripts = Array.from(head.querySelectorAll(scriptSelector));
        const links = Array.from(head.querySelectorAll(linkSelector));

        expect(scripts.length).to.equal(1);
        expect(links.length).to.equal(1);
    });

    it('remote script', async function () {
        const script = await loadScript({
            src: emptyScriptSrc
        });

        expect(script instanceof HTMLScriptElement).to.be.true;
    });

    it('remote stylesheet', async function () {
        const script = await loadScript({
            href: emptyStylesheetHref
        });

        expect(script instanceof HTMLLinkElement).to.be.true;
    });

    it('inline script', async function () {
        const script = await loadScript({
            js: 'console.log("inline script");',
            name: 'inline-script'
        });

        expect(script instanceof HTMLScriptElement).to.be.true;
        expect(script.dataset.name).to.equal('inline-script');
    });

    it('inline stylesheet', async function () {
        const script = await loadScript({
            css: '/** Inline Stylesheet **/',
            name: 'inline-stylesheet'
        });

        expect(script instanceof HTMLStyleElement).to.be.true;
        expect(script.dataset.name).to.equal('inline-stylesheet');
    });
});