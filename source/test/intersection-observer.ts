import { expect } from 'chai';

export default () => describe('intersectionObserver', function () {
    before(function () {
        const { VamtigerBrowserMethod } = window;
        const { intersectionObserver } = VamtigerBrowserMethod;
        const element = document.createElement('div');
        const { dataset } = element;

        dataset.intercetionObserver = '';

        intersectionObserver && intersectionObserver.observe(element);

        document.body.appendChild(element);
    });

    it('intersectionObserver', intersectionObserverTest);
});

async function intersectionObserverTest() {

}