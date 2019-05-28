import * as tslib from 'tslib/tslib';
import { requestIdleCallback } from 'requestidlecallback';
export declare enum Environment {
    window = "window",
    worker = "worker"
}
export declare enum Origin {
    nowhere = "",
    everyWhere = "*"
}
export declare enum HostName {
    localHost = "localhost"
}
export declare enum LocalHostRelativePath {
    vamtigerBrowserMethod = "vamtiger-browser-method.js"
}
export declare enum ScriptType {
    js = "text/javascript",
    json = "application/json",
    jsonld = "application/ld+json"
}
export declare enum ScriptAttribute {
    type = "type"
}
export declare enum DataAttribute {
    vamtigerElementQuery = "vamtigerLoadElementQueryCss",
    elementQueryCssLoaded = "elementQueryCssLoaded"
}
export declare enum ErrorMessage {
    failedToLoadScript = "Failed to load script",
    windowPropertyNotSet = "Window property not set",
    unsupportedFeature = "Unsupported feature",
    customElementAreadyDefined = "Custom element already defined",
    noElementName = "No Element Name",
    noTemplateUrl = "No Template URL",
    noElementSelector = "No Template Selector",
    noTemplateForUrl = "No Template for URL",
    noTemplate = "No Template",
    noElementForSelector = "No Element for Selector",
    noJsonLdParameter = "No \"jsonLd\" property set"
}
export declare enum StringConstant {
    nothing = "",
    slash = "/",
    dash = "-",
    pipe = "|",
    comma = ",",
    backTick = "`",
    doubleQuote = "\""
}
export declare enum TagName {
    div = "div",
    template = "template"
}
export declare enum LinkRel {
    stylesheet = "stylesheet"
}
export declare enum LoadScriptElement {
    script = "script",
    link = "link",
    style = "style"
}
export declare enum Selector {
    lastStylesheet = "style:last-of-type",
    lastMetaElement = "head > meta:last-of-type",
    webcomponentsjs = "script[src*=\"@webcomponents/webcomponentsjs\"]",
    style = "style",
    stylesheet = " link[rel=\"stylesheet\"]",
    vamtigerBrowserMethodJsonJs = "[src$=\"vamtiger-browser-method.js.json.js\"]",
    vamtigerBrowserMethodJson = "[data-name$=\"vamtiger-browser-method.js.json\"]",
    vamtigerBrowserMethod = "[data-name$=\"vamtiger-browser-method.js\"]"
}
export declare enum MetaElementName {
    loadElementQueryCss = "vamtiger-load-element-query-css"
}
export declare enum ScriptNameSuffix {
    style = "style",
    stylesheet = "stylesheet"
}
export declare enum MessageAction {
    ignore = "ignore",
    removeRedundantScripts = "removeRedundantScripts"
}
export interface ILoadRemoteScriptParams {
    src: string;
}
export interface ILoadRemoteStylesheetScriptParams {
    href: string;
}
export interface ILoadLocalScriptParams {
    name: string;
    removeFromDom?: boolean;
}
export interface ILoadScriptParams {
    js: string;
    jsonld?: boolean;
}
export interface ILoadJsonScriptParams {
    json: string;
}
export interface ILoadStylesheetScriptParams {
    css: string;
}
export interface IAnyObject {
    [key: string]: any;
}
export interface IJsonData {
    jsonLd: IAnyObject[];
    json?: IAnyObject;
}
export interface ILoadScript {
    params: LocalScriptParams | LocalStylesheetScriptParams | ILoadRemoteScriptParams | ILoadRemoteStylesheetScriptParams | ILoadJsonScriptParams;
    reject: (error: Error) => void;
}
export interface ILoadShadowStylesheet {
    css: string;
    element: HTMLElement;
}
export interface IJsonScriptData {
    name: string;
    text: string;
}
export interface IDefineCustomElement {
    name: string;
    constructor: {
        new (): HTMLElement;
        prototype: HTMLElement;
    };
    ignore?: boolean;
}
export interface IPause {
    milliseconds: number;
}
export interface IGetElementBase {
    name: string;
    loadStylesheets?: boolean;
}
export interface IGetElementTemplate extends IGetElementBase {
    template: string;
    selector?: string;
}
export interface IGetElementUrl extends IGetElementBase {
    url: string;
    selector: string;
}
export interface ILoadElementQueryCss {
    css: string;
    stylesheetName?: string;
    hostName?: string;
}
export interface IGetMetaElement {
    selector?: string;
    properties?: {
        id?: string;
    };
    attributes?: {
        [key: string]: string;
    };
    dataset?: DOMStringMap;
}
export interface ILoadContainerStylesheets {
    name: string;
    container: HTMLTemplateElement;
}
export interface IGetData {
    jsonLd: string;
}
export interface IGetJsonLd {
    jsonLd: string;
}
export interface IJosnLdImageObject {
    "@context": string;
    '@type': string;
    name: string;
    description: string;
    author: {
        '@type': string;
        givenName: string;
        familyName: string;
        email: string;
    };
    datePublished: string;
    contentUrl: string;
}
export interface IMessageAction {
    action: MessageAction;
    params: any;
}
export interface IMessageResponse {
    data: IMessageAction;
}
export interface IRemoveRedundantScripts {
    selector: string;
}
export declare type MessageResponse = IMessageResponse | undefined;
export declare type TsLibType = typeof tslib;
export declare type TsLibKey = keyof TsLibType;
export declare type TsLib = {
    [K in TsLibKey]: TsLibType[K];
};
export declare type LocalScriptParams = ILoadLocalScriptParams & ILoadScriptParams;
export declare type LocalStylesheetScriptParams = ILoadLocalScriptParams & ILoadStylesheetScriptParams;
export declare type LoadScriptParams = LocalScriptParams | LocalStylesheetScriptParams | ILoadRemoteScriptParams | ILoadRemoteStylesheetScriptParams;
export declare type LoadScriptsParams = LoadScriptParams[];
export declare type LoadScriptsSequentiallyParams = LoadScriptsParams[];
export declare type LoadedScript<P extends ILoadScript['params']> = P extends ILoadScriptParams ? HTMLScriptElement : P extends ILoadStylesheetScriptParams ? HTMLStyleElement : P extends ILoadRemoteScriptParams ? HTMLScriptElement : P extends ILoadRemoteStylesheetScriptParams ? HTMLLinkElement : never;
export declare type LoadedScripts<P extends LoadScriptsParams> = P extends ILoadScriptParams[] ? HTMLScriptElement[] : P extends ILoadStylesheetScriptParams[] ? HTMLStyleElement[] : P extends ILoadRemoteScriptParams[] ? HTMLScriptElement[] : P extends ILoadRemoteStylesheetScriptParams[] ? HTMLLinkElement[] : never;
export declare type LoadedScriptsSequentially<P extends LoadScriptsSequentiallyParams> = P extends ILoadScriptParams[][] ? HTMLScriptElement[] : P extends ILoadStylesheetScriptParams[][] ? HTMLStyleElement[] : P extends ILoadRemoteScriptParams[][] ? HTMLScriptElement[] : P extends ILoadRemoteStylesheetScriptParams[][] ? HTMLLinkElement[] : never;
export declare type GetElementParams = IGetElementTemplate | IGetElementUrl;
export declare type VamtigerBrowserMethod = {
    loadScript: <P extends LocalScriptParams | LocalStylesheetScriptParams | ILoadRemoteScriptParams | ILoadRemoteStylesheetScriptParams>(params: P) => Promise<LoadedScript<P>>;
    loadScripts: <P extends LoadScriptParams[]>(params: P) => Promise<LoadedScripts<P>>;
    loadScriptsSequentially: <P extends LoadScriptParams[][]>(params: P) => Promise<LoadedScriptsSequentially<P>>;
    loadShadowStylesheet: ({ css, element }: ILoadShadowStylesheet) => void;
    defineCustomElement: ({ name, constructor, ignore }: IDefineCustomElement) => void;
    pause: ({ milliseconds }: IPause) => Promise<{}>;
    getElement: <P extends GetElementParams>(params: P) => Promise<HTMLElement>;
    getData: ({ jsonLd }: IGetData) => Promise<IJsonData>;
    getEnvironment: () => Environment;
    envrironment: Environment;
    worker?: Worker;
};
export declare type JsonDataResolve = (data: IJsonData) => void;
export declare type WorkerPostMessage = (message: IAnyObject) => void;
declare global {
    interface Window extends TsLib {
        VamtigerBrowserMethod: VamtigerBrowserMethod;
        EQCSS: IAnyObject;
        requestIdleCallback?: typeof requestIdleCallback;
    }
    namespace NodeJS {
        interface Global {
            VamtigerBrowserMethod: Window['VamtigerBrowserMethod'];
        }
    }
}
export declare const regex: {
    showRootHost: RegExp;
    dash: RegExp;
    space: RegExp;
    nonWord: RegExp;
    backTicks: RegExp;
};
export declare const selector: {
    worker: string;
    redundantScripts: string;
};
export declare const sendMessageFromWorker: WorkerPostMessage;
export declare function ignore(params?: any): void;
