"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var get_worker_1 = require("./get-worker");
var is_window_1 = require("./is-window");
var is_text_mode_1 = require("./is-text-mode");
var get_intersection_observer_1 = require("./get-intersection-observer");
var get_service_worker_registration_1 = require("./get-service-worker-registration");
var handle_message_1 = require("./handle-message");
var nothing = types_1.StringConstant.nothing;
var metaElementHtml = [
    '<meta data-custom-element-name>',
    '<meta data-dependency>'
].join(nothing);
function default_1() {
    if (is_window_1.default()) {
        setEventListeser();
        setupWindow();
    }
}
exports.default = default_1;
function setEventListeser() {
    var serviceWorker = navigator.serviceWorker;
    serviceWorker && serviceWorker.addEventListener('message', handle_message_1.default);
}
function setupWindow() {
    return __awaiter(this, void 0, void 0, function () {
        var serviceWorker, head, firstMetaElement, VamtigerBrowserMethod, _a, metaElement, customeElementMetaElement, textMode, serviceWorkerRegistration, messageChannel, port1, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    serviceWorker = navigator.serviceWorker;
                    head = document.head;
                    firstMetaElement = head.querySelector('meta');
                    VamtigerBrowserMethod = self.VamtigerBrowserMethod;
                    _a = VamtigerBrowserMethod.metaElement, metaElement = _a === void 0 ? document.createElement('meta') : _a;
                    customeElementMetaElement = document.createElement('meta');
                    textMode = is_text_mode_1.default();
                    return [4 /*yield*/, get_service_worker_registration_1.default()];
                case 1:
                    serviceWorkerRegistration = _c.sent();
                    messageChannel = new MessageChannel();
                    port1 = messageChannel.port1;
                    customeElementMetaElement.dataset[types_1.DataAttribute.customElementName] = nothing;
                    metaElement.id = types_1.ElementId.metaElement;
                    metaElement.innerHTML = metaElementHtml;
                    head.insertBefore(metaElement, firstMetaElement);
                    VamtigerBrowserMethod.metaElement = metaElement;
                    _b = VamtigerBrowserMethod;
                    return [4 /*yield*/, get_worker_1.default()];
                case 2:
                    _b.worker = _c.sent();
                    VamtigerBrowserMethod.textMode = textMode;
                    VamtigerBrowserMethod.intersectionObserver = get_intersection_observer_1.default();
                    VamtigerBrowserMethod.serviceWorkerRegistration = serviceWorkerRegistration;
                    VamtigerBrowserMethod.serviceWorker = serviceWorker && serviceWorker.controller || undefined;
                    VamtigerBrowserMethod.messageChannel = messageChannel;
                    port1.addEventListener('message', handle_message_1.default);
                    return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=setup-window.js.map