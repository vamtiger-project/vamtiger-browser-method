import { expect } from 'chai';

const customElementName = 'new-custom-element';

export default () => describe('defineCustomElement', function () {
    before(function () {
        const { VamtigerBrowserMethod } = window;
        const { defineCustomElement } = VamtigerBrowserMethod;

        defineCustomElement({
            name: customElementName,
            constructor: HTMLElement
        })
    });

    it('define a new custom element', async function () {
        const { customElements } = window;

        expect(customElements.get(customElementName)).to.be.ok;
    });

    it('throw an error when already defined', async function () {
        const { VamtigerBrowserMethod } = window;
        const { defineCustomElement } = VamtigerBrowserMethod;
        const params = {
            name: customElementName,
            constructor: HTMLElement
        };
        const test = Promise.resolve()
            .then(() => defineCustomElement(params))
            .catch(error => expect(error).to.be.an('error'));

        return test;
    });
});