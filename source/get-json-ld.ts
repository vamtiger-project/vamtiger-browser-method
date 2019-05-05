import {
    IGetJsonLd,
    IAnyObject
} from './types';
import loadScript from './load-script';

const { parse } = JSON;

export default async function<J extends IAnyObject> ({ jsonLd: url }: IGetJsonLd) {
    const { head } = document;
    const script = await loadScript({
        src: url
    });
    const selector = `script[type="application/ld+json"][data-json-ld="${url}"]`;
    const jsonLdScript = head.querySelector<HTMLScriptElement>(selector);
    const jsonLdString = jsonLdScript && jsonLdScript.innerHTML;
    const jsonLd = (jsonLdString && parse(jsonLdString) || {}) as J;

    return jsonLd;
}