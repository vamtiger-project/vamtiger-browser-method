"use strict";
var stringify = JSON.stringify;
var head = document.head;
var jsonLdScript = document.createElement('script');
main();
function main() {
    var jsonLd = {
        test: 'test'
    };
    jsonLdScript.type = 'application/ld+json';
    jsonLdScript.dataset.jsonLd = 'test/json-ld.js';
    jsonLdScript.innerHTML = stringify(jsonLd);
    head.appendChild(jsonLdScript);
}
//# sourceMappingURL=json-ld.js.map