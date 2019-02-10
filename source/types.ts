import * as tslib from '../node_modules/tslib/tslib';
import defineCustomElement from './define-custom-element';

export enum ScriptType {
    jsonld = 'application/ld+json'
}

export enum ScriptAttribute {
    type = 'type'
}

export enum ErrorMessage {
    failedToLoadScript = 'Failed to load script',
    windowPropertyNotSet = 'Window property not set',
    unsupportedFeature = 'Unsupported feature',
    customElementAreadyDefined = 'Custom element already defined'
}

export enum StringConstant {
    slash = '/'
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
    webcomponentsjs = 'script[src*="@webcomponents\/webcomponentsjs"]'
}

export interface ILoadRemoteScriptParams {
    src: string;
}

export interface ILoadRemoteStylesheetScriptParams {
    href: string;
}

export interface ILoadLocalScriptParams {
    name: string;
}

export interface ILoadScriptParams {
    js: string;
    jsonld?: boolean;
}

export interface ILoadStylesheetScriptParams {
    css: string;
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

declare global {
    interface Window extends TsLib {
        VamtigerBrowserMethod: {
            loadScript: <P extends ILoadScript['params']>(params: P) => Promise<LoadedScript<P>>;
            loadScripts: <P extends LoadScriptsParams>(params: P) => Promise<LoadedScripts<P>>;
            loadScriptsSequentially: <P extends LoadScriptsSequentiallyParams>(params: P) => Promise<LoadedScriptsSequentially<P>>;
            loadShadowStylesheet: (params: ILoadShadowStylesheet) => void;
            defineCustomElement: (params: IDefineCustomElement) => void;
            pause: (params: IPause) => Promise<{}>;
        }
    }

    namespace NodeJS {
        interface  Global {
            VamtigerBrowserMethod: Window['VamtigerBrowserMethod'];
        }
    }
}