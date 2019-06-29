"use strict";
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
    var message = _a.data;
    var messageData = typeof message === 'string' && parse(message)
        || message instanceof Uint8Array && parse(textDecoder.decode(message));
    if (typeof messageData.params === 'string') {
        messageData.params = parse(messageData.params);
    }
    return messageData;
}
//# sourceMappingURL=get-message-data.js.map