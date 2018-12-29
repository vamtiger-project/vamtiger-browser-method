"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mocha_1 = require("mocha");
var load_script_1 = require("./load-script");
mocha_1.setup('bdd');
addEventListener('load', test);
function test() {
    load_script_1.default();
    mocha_1.run();
}
//# sourceMappingURL=browser.js.map