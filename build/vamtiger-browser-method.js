"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var load_script_1 = require("./load-script");
var load_scripts_1 = require("./load-scripts");
var load_scripts_sequentially_1 = require("./load-scripts-sequentially");
var load_shadow_stylesheet_1 = require("./load-shadow-stylesheet");
var define_custom_element_1 = require("./define-custom-element");
var pause_1 = require("./pause");
var get_element_1 = require("./get-element");
var get_data_1 = require("./get-data");
var get_environment_1 = require("./get-environment");
var setup_window_1 = require("./setup-window");
var setup_worker_1 = require("./setup-worker");
var set_support_1 = require("./set-support");
var get_microdata_caption_1 = require("./get-microdata-caption");
var environment = get_environment_1.default();
var vamtigerBrowserMethod = {
    loadScript: load_script_1.default,
    loadScripts: load_scripts_1.default,
    loadScriptsSequentially: load_scripts_sequentially_1.default,
    loadShadowStylesheet: load_shadow_stylesheet_1.default,
    defineCustomElement: define_custom_element_1.default,
    pause: pause_1.default,
    getElement: get_element_1.default,
    getData: get_data_1.default,
    getEnvironment: get_environment_1.default,
    environment: environment,
    messageQueue: new Map(),
    getMicrodataCaption: get_microdata_caption_1.default
};
main();
function main() {
    try {
        var VamtigerBrowserMethod = self.VamtigerBrowserMethod;
        if (!VamtigerBrowserMethod) {
            self.VamtigerBrowserMethod = vamtigerBrowserMethod;
            set_support_1.default();
            setup_window_1.default();
            setup_worker_1.default();
        }
    }
    catch (error) {
        handleError(error);
    }
}
function handleError(error) {
    console.error(error);
    throw error;
}
//# sourceMappingURL=vamtiger-browser-method.js.map