const { stringify } = JSON;
const { head } = document;
const jsonLdScript = document.createElement('script');

main();

function main() {
    const jsonLd = {
        test: 'test'
    };

    jsonLdScript.type = 'application/ld+json';
    jsonLdScript.dataset.jsonLd = 'test/json-ld.js';
    jsonLdScript.innerHTML = stringify(jsonLd);

    head.appendChild(jsonLdScript);
}