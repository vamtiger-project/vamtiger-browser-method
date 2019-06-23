"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var get_meta_element_1 = require("./get-meta-element");
var get_camel_case_1 = require("./get-camel-case");
var showRootHost = types_1.regex.showRootHost;
var nothing = types_1.StringConstant.nothing;
function default_1(_a) {
    var css = _a.css, _b = _a.stylesheetName, currentStylesheetName = _b === void 0 ? nothing : _b, _c = _a.hostName, hostName = _c === void 0 ? nothing : _c;
    var metaElement = get_meta_element_1.default({
        properties: {
            id: types_1.MetaElementName.loadElementQueryCss
        }
    });
    var stylesheetName = get_camel_case_1.default({
        input: currentStylesheetName,
        from: 'kebabCase'
    });
    var dataset = metaElement.dataset;
    var elementQueryCss = !dataset.hasOwnProperty(hostName) && (hostName && css.replace(showRootHost, hostName)) || css;
    var EQCSS = self.EQCSS;
    if (elementQueryCss && EQCSS) {
        EQCSS.register(EQCSS.parse(elementQueryCss));
        if (stylesheetName) {
            dataset[stylesheetName] = nothing;
        }
        else if (hostName) {
            dataset[hostName] = nothing;
        }
    }
}
exports.default = default_1;
//# sourceMappingURL=load-element-query-css.js.map