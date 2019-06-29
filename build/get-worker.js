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
var handle_message_1 = require("./handle-message");
var get_local_host_worker_url_1 = require("./get-local-host-worker-url");
var stringify = JSON.stringify;
var params = {
    type: types_1.ScriptType.js
};
var newline = types_1.StringConstant.newline;
var worker;
function default_1() {
    return __awaiter(this, void 0, void 0, function () {
        var localHostWorkerUrl, head, createObjectURL, workderScript, workerDependecies, workerScripts, workerBlob, workerUrl, currentWorker;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, get_local_host_worker_url_1.default()];
                case 1:
                    localHostWorkerUrl = _a.sent();
                    head = document.head;
                    createObjectURL = URL.createObjectURL;
                    workderScript = head.querySelector(types_1.Selector.vamtigerBrowserMethod);
                    workerDependecies = (Array.from(head.querySelectorAll(types_1.Selector.workderDependency)) || [])
                        .map(function (_a) {
                        var innerHTML = _a.innerHTML;
                        return innerHTML;
                    })
                        .filter(function (script) { return script; });
                    workerScripts = workerDependecies.concat([
                        workderScript && workderScript.innerHTML || ''
                    ]).filter(function (script) { return script; }).join(newline.repeat(2));
                    workerBlob = workerScripts && workerScripts.length && new Blob([workerScripts], params);
                    workerUrl = workerBlob && createObjectURL && createObjectURL(workerBlob);
                    currentWorker = workerUrl && new Worker(localHostWorkerUrl || workerUrl);
                    if (currentWorker) {
                        currentWorker.addEventListener('message', handle_message_1.default);
                        currentWorker.addEventListener('error', handleError);
                    }
                    worker = worker || currentWorker;
                    return [2 /*return*/, worker];
            }
        });
    });
}
exports.default = default_1;
function handleError(event) {
    var keys = Object.keys(event);
    keys.forEach(function (key) { return console.error(typeof event[key] === 'string' || stringify(event[key])); });
}
exports.handleError = handleError;
//# sourceMappingURL=get-worker.js.map