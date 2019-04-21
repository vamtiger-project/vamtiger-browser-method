import * as tslib from '../node_modules/tslib/tslib';
export declare enum ScriptType {
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
    noElementForSelector = "No Element for Selector"
}
export declare enum StringConstant {
    nothing = "",
    slash = "/",
    dash = "-"
}
export declare enum TagName {
    div = "div"
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
    webcomponentsjs = "script[src*=\"@webcomponents/webcomponentsjs\"]"
}
export declare enum MetaElementName {
    loadElementQueryCss = "vamtiger-load-element-query-css"
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
export interface ILoadStylesheetScriptParams {
    css: string;
}
export interface ILoadScript {
    params: LocalScriptParams | LocalStylesheetScriptParams | ILoadRemoteScriptParams | ILoadRemoteStylesheetScriptParams;
    reject: (error: Error) => void;
}
export interface ILoadShadowStylesheet {
    css: string;
    element: HTMLElement;
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
}
export interface IGetElementTemplate extends IGetElementBase {
    template: string;
}
export interface IGetElementUrl extends IGetElementBase {
    url: string;
    selector: string;
}
export interface IAnyObject {
    [key: string]: any;
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
declare global {
    interface Window extends TsLib {
        VamtigerBrowserMethod: {
            loadScript: <P extends ILoadScript['params']>(params: P) => Promise<LoadedScript<P>>;
            loadScripts: <P extends LoadScriptsParams>(params: P) => Promise<LoadedScripts<P>>;
            loadScriptsSequentially: <P extends LoadScriptsSequentiallyParams>(params: P) => Promise<LoadedScriptsSequentially<P>>;
            loadShadowStylesheet: (params: ILoadShadowStylesheet) => void;
            defineCustomElement: (params: IDefineCustomElement) => void;
            getElement: (params: GetElementParams) => Promise<HTMLElement>;
            pause: (params: IPause) => Promise<{}>;
        };
        EQCSS: IAnyObject;
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
};
