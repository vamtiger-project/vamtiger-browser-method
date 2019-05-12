import * as tslib from 'tslib/tslib';
import { requestIdleCallback } from 'requestidlecallback';

export enum ScriptType {
    jsonld = 'application/ld+json'
}

export enum ScriptAttribute {
    type = 'type'
}

export enum DataAttribute {
    vamtigerElementQuery = 'vamtigerLoadElementQueryCss',
    elementQueryCssLoaded = 'elementQueryCssLoaded'
}

export enum ErrorMessage {
    failedToLoadScript = 'Failed to load script',
    windowPropertyNotSet = 'Window property not set',
    unsupportedFeature = 'Unsupported feature',
    customElementAreadyDefined = 'Custom element already defined',
    noElementName = 'No Element Name',
    noTemplateUrl = 'No Template URL',
    noElementSelector = 'No Template Selector',
    noTemplateForUrl = 'No Template for URL',
    noTemplate = 'No Template',
    noElementForSelector = 'No Element for Selector',
    noJsonLdParameter = 'No "jsonLd" property set'
}

export enum StringConstant {
    nothing = '',
    slash = '/',
    dash = '-',
    pipe = '|',
    comma = ','
}

export enum TagName {
    div = 'div',
    template = 'template'
}

export enum LinkRel {
    stylesheet = 'stylesheet'
}

export enum LoadScriptElement {
    script = 'script',
    link = 'link',
    style = 'style'
}

export enum Selector {
    lastStylesheet = 'style:last-of-type',
    lastMetaElement = 'head > meta:last-of-type',
    webcomponentsjs = 'script[src*="@webcomponents\/webcomponentsjs"]',
    style = 'style',
    stylesheet = ' link[rel="stylesheet"]'
}

export enum  MetaElementName {
    loadElementQueryCss = 'vamtiger-load-element-query-css'
}

export enum ScriptNameSuffix {
    style = 'style',
    stylesheet = 'stylesheet'
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

export interface IAnyObject {
    [key: string]: any;
}

export interface IJsonData {
    jsonLd: IAnyObject[];
    json?: IAnyObject;
}

export interface ILoadScript {
    params: LocalScriptParams
        | LocalStylesheetScriptParams
        | ILoadRemoteScriptParams
        | ILoadRemoteStylesheetScriptParams;
    reject: (error: Error) => void
}

export interface ILoadShadowStylesheet {
    css: string;
    element: HTMLElement;
}

export interface IDefineCustomElement {
    name: string;
    constructor: {
        new (): HTMLElement
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
}

export interface IGetElementUrl extends IGetElementBase {
    url: string;
    selector:  string;
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

export type TsLibType = typeof tslib;

export type TsLibKey = keyof TsLibType;

export type TsLib = {
    [K in TsLibKey]: TsLibType[K]
}

export type LocalScriptParams = ILoadLocalScriptParams & ILoadScriptParams;

export type LocalStylesheetScriptParams = ILoadLocalScriptParams & ILoadStylesheetScriptParams;

export type LoadScriptParams = LocalScriptParams
    | LocalStylesheetScriptParams
    | ILoadRemoteScriptParams
    | ILoadRemoteStylesheetScriptParams;

export type LoadScriptsParams = LoadScriptParams[];

export type LoadScriptsSequentiallyParams = LoadScriptsParams[];

export type LoadedScript<P extends ILoadScript['params']> =
    P extends ILoadScriptParams ? HTMLScriptElement :
    P extends ILoadStylesheetScriptParams ? HTMLStyleElement :
    P extends ILoadRemoteScriptParams ? HTMLScriptElement :
    P extends ILoadRemoteStylesheetScriptParams ? HTMLLinkElement :
    never;

export type LoadedScripts<P extends LoadScriptsParams> =
    P extends ILoadScriptParams[] ? HTMLScriptElement[] :
    P extends ILoadStylesheetScriptParams[] ? HTMLStyleElement[] :
    P extends ILoadRemoteScriptParams[] ? HTMLScriptElement[] :
    P extends ILoadRemoteStylesheetScriptParams[] ? HTMLLinkElement[] :
    never;

export type LoadedScriptsSequentially<P extends LoadScriptsSequentiallyParams> =
    P extends ILoadScriptParams[][] ? HTMLScriptElement[] :
    P extends ILoadStylesheetScriptParams[][] ? HTMLStyleElement[] :
    P extends ILoadRemoteScriptParams[][] ? HTMLScriptElement[] :
    P extends ILoadRemoteStylesheetScriptParams[][] ? HTMLLinkElement[] :
    never;

export type GetElementParams = IGetElementTemplate | IGetElementUrl;

export type VamtigerBrowserMethod = {
    loadScript: <P extends LocalScriptParams | LocalStylesheetScriptParams | ILoadRemoteScriptParams | ILoadRemoteStylesheetScriptParams>(params: P) => Promise<LoadedScript<P>>;
    loadScripts: <P extends LoadScriptParams[]>(params: P) => Promise<LoadedScripts<P>>;
    loadScriptsSequentially: <P extends LoadScriptParams[][]>(params: P) => Promise<LoadedScriptsSequentially<P>>;
    loadShadowStylesheet: ({ css, element }: ILoadShadowStylesheet) => void;
    defineCustomElement: ({ name, constructor, ignore }: IDefineCustomElement) => void;
    pause: ({ milliseconds }: IPause) => Promise<{}>;
    getElement: <P extends GetElementParams>(params: P) => Promise<HTMLElement>;
    getData: ({ jsonLd }: IGetData) => Promise<IJsonData>;
};

declare global {
    interface Window extends TsLib {
        VamtigerBrowserMethod: VamtigerBrowserMethod;
        EQCSS: IAnyObject;
        requestIdleCallback?: typeof requestIdleCallback
    }

    namespace NodeJS {
        interface  Global {
            VamtigerBrowserMethod: Window['VamtigerBrowserMethod'];
        }
    }
}

export const regex = {
    showRootHost: /:{1,2}host/gm,
    dash: new RegExp(StringConstant.dash, 'g'),
    space: /\s/g,
    nonWord: /\W+/g
}