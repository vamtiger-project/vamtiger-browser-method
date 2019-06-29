"use strict";
var stringify = JSON.stringify;
var head = document.head;
var jsonLd = {
    test: 'test'
};
var jsonLdScript = document.createElement('script');
jsonLdScript.type = 'application/ld+json';
jsonLdScript.dataset.jsonLd = 'test/json-ld.js';
jsonLdScript.innerHTML = stringify(jsonLd);
head.appendChild(jsonLdScript);
//# sourceMappingURL=json-ld.js.map