"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(_a) {
    var href = _a.href, text = _a.text;
    var link = href && text && "<a href=\"" + href + "\" target=\"_blank\">" + text + "</a>" || '';
    return link;
}
exports.default = default_1;
//# sourceMappingURL=get-tab-link.js.map