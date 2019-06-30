export default function () {
    const { documentElement } = document;
    const isTextMode = documentElement.dataset.hasOwnProperty('vamtigerTextMode');

    return isTextMode;
}