"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var loadTsLib = require("./load-ts-lib");
var load_script_1 = require("./load-script");
var types_1 = require("./types");
var windowPropertyNotSet = types_1.ErrorMessage.windowPropertyNotSet;
loadTsLib;
try {
    window.VamtigerBrowserMethod = {
        loadScript: load_script_1.default
    };
}
catch (error) {
    console.warn(error);
    console.warn(windowPropertyNotSet + ": VamtigerBrowserMethod");
}
//# sourceMappingURL=vamtiger-browser-method.js.map