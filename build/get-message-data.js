"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var parse = JSON.parse;
var ignoreMessage = {
    action: types_1.MessageAction.ignore,
    params: {}
};
var textDecoder = new TextDecoder();
function default_1(event) {
    var message;
    try {
        message = getMessageData(event) || ignoreMessage;
    }
    catch (error) {
        message = ignoreMessage;
    }
    return message;
}
exports.default = default_1;
function getMessageData(_a) {
    var message = _a.data, ports = _a.ports;
    var messageData = typeof message === 'string' && parse(message)
        || message instanceof Uint8Array && parse(textDecoder.decode(message));
    if (typeof messageData.params === 'string') {
        messageData.params = __assign({}, parse(messageData.params), { ports: ports });
    }
    return messageData;
}
//# sourceMappingURL=get-message-data.js.map