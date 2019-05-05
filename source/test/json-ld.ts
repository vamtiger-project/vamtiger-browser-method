const { stringify } = JSON;
const { head } = document;
const jsonLd = {
    test: 'test'
};
const jsonLdScript = document.createElement('script');

jsonLdScript.type = 'application/ld+json';
jsonLdScript.dataset.jsonLd = 'test/json-ld.js';
jsonLdScript.innerHTML = stringify(jsonLd);

head.appendChild(jsonLdScript);