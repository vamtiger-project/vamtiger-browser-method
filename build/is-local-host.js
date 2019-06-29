"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
function default_1() {
    var location = window.location;
    var isLocalHost = types_1.HostName.localHost === location.hostname;
    return isLocalHost;
}
exports.default = default_1;
//# sourceMappingURL=is-local-host.js.map