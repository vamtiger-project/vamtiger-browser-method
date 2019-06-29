import {
    IViewJsonLd,
    Dependency
} from './types';
import loadScript from './load-script';

const { jsonLdViewer: src } = Dependency;

let jsonLdViewerElement: HTMLElement;

export default async function ({jsonLd}: IViewJsonLd) {
    const jsonLdViewerScript = await loadScript({name: src, src});
    const jsonLdViewer = getJsonLdViewer();
    const { dataset } = jsonLdViewer;

    dataset.jsonLd = jsonLd;
}

function getJsonLdViewer() {
    const { body } = document;
    const jsonLdViewer = jsonLdViewerElement || document.createElement('vamtiger-json-ld-viewer');

    if (!jsonLdViewerElement) {
        jsonLdViewerElement = jsonLdViewer;

        body.appendChild(jsonLdViewer);
    }

    return jsonLdViewer;
}