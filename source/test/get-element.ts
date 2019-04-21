import { expect } from 'chai';

export default () => describe('getTemplate', function () {
    it('template', templateTest);

    it('url', urlTest);
});

async function templateTest() {
    const { VamtigerBrowserMethod } = window;
    const { getElement  } = VamtigerBrowserMethod;
    const element = await getElement({
        name: 'templateTest',
        template: `<div>/div>`
    })

    expect(element).to.be.ok;
}

async function urlTest(){
    const { VamtigerBrowserMethod } = window;
    const { getElement  } = VamtigerBrowserMethod;
    const element = await getElement({
        name: 'urlTemplateTest',
        url: 'template.html',
        selector: '[data-url-template]'
    })

    expect(element).to.be.ok;
}