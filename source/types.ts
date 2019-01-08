import * as tslib from '../node_modules/tslib/tslib';

export enum ScriptType {
    jsonld = 'application/ld+json'
}

export enum ScriptAttribute {
    type = 'type'
}

export enum ErrorMessage {
    failedToLoadScript = 'Failed to load script',
    windowPropertyNotSet = 'Window property not set'
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
    lastStylesheet = 'style:last-of-type'
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

export type TsLibType = typeof tslib;

export type TsLibKey = keyof TsLibType;

export type TsLib = {
    [K in TsLibKey]: TsLibType[K]
}

export type LocalScriptParams = ILoadLocalScriptParams & ILoadScriptParams;

export type LocalStylesheetScriptParams = ILoadLocalScriptParams & ILoadStylesheetScriptParams;

export type LoadedScript<P extends ILoadScript['params']> = 
    P extends ILoadScriptParams ? HTMLScriptElement :
    P extends ILoadStylesheetScriptParams ? HTMLStyleElement :
    P extends ILoadRemoteScriptParams ? HTMLScriptElement :
    P extends ILoadRemoteStylesheetScriptParams ? HTMLLinkElement :
    never;

declare global {
    interface Window extends TsLib {
        VamtigerBrowserMethod: {
            loadScript: <P extends ILoadScript['params']>(params: P) => Promise<LoadedScript<P>>
        };
    }

    namespace NodeJS {
        interface  Global {
            VamtigerBrowserMethod: Window['VamtigerBrowserMethod']
        }
    }
}