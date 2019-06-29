import * as tslib from 'tslib/tslib';
import { requestIdleCallback } from 'requestidlecallback';
import * as lodash from 'lodash';

export enum Environment {
    window = 'window',
    worker = 'worker'
}

export enum EventName {
    vamtigerBrowserMethodReady = 'vamtigerBrowserMethodReady'
}

export enum TimeoutDuration {
    webComponent = 60000,
    indexDbIsAccessible = 100
}

export enum MessageQueueName {
    webComponent = 'webComponent'
}

export enum Prefix {
    vamtigerBrowserMethod = 'vamtiger-browser-method',
    db = 'vamtiger-browser-method',
    messageIdWindow = 'vamtiger-browser-method-window',
    messageIdWorker = 'vamtiger-browser-method-worker'
}

export enum Origin {
    nowhere = '',
    everyWhere = '*'
}

export enum HostName {
    localHost = 'localhost'
}

export enum LocalHostRelativePath {
    vamtigerBrowserMethod = 'vamtiger-browser-method.js'
}

export enum ScriptType {
    js = 'text/javascript',
    babel = 'text/babel',
    json = 'application/json',
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
    comma = ',',
    backTick = '`',
    doubleQuote = '"',
    commaSpace = ', ',
    space = ' ',
    period = '.'
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
    stylesheet = ' link[rel="stylesheet"]',
    vamtigerBrowserMethodJsonJs = '[src$="vamtiger-browser-method.js.json.js"]',
    worker = '[src$="js.json.js"][data-worker]',
    vamtigerBrowserMethodJson = '[data-name$="vamtiger-browser-method.js.json"]',
    vamtigerBrowserMethod = '[data-name$="vamtiger-browser-method.js"]',
    script = 'script',
    jsonScript = 'script[type="application/json"]',
    jsonLdScript = 'script[type="application/ld+json"]',
    a = 'a',
    linkedDataCaption = '[data-linked-data-caption]',
    linkedDataCaptionElement = '[data-linked-data-caption-element]'
}

export enum  MetaElementName {
    loadElementQueryCss = 'vamtiger-load-element-query-css'
}

export enum ScriptNameSuffix {
    style = 'style',
    stylesheet = 'stylesheet'
}

export enum MessageAction {
    ignore = 'ignore',
    removeRedundantScripts = 'removeRedundantScripts',
    setWorkerSupport = 'setWorkerSupport',
    saveWebComponentData = 'saveWebComponentData',
    getWebComponentData = 'getWebComponentData',
    dequeue = 'dequeue',
    loadWebComponentData = 'loadWebComponentData',
    saveSupport = 'saveSupport'
}

export enum DbName {
    vamtigerBrowserSupport = 'vamtiger-browser-support'
}

export enum DbStoreName {
    support = 'support',
    webComponent = 'web-component'
}

export enum DbMode {
    readonly = 'readonly',
    readwrite = 'readwrite',
    versionchange = 'versionchange'
}

export enum DbKeyPath {
    webComponent = 'url',
    support = 'environment'
}

export enum Dependency {
    lodash = 'https://vamtiger-project.github.io/vamtiger-browser-method/build/lodash.min.js.json.js'
}

export interface IDequeue {
    key: string;
    data: IAnyObject;
}

export interface IGetDbParams {
    storeName: DbStoreName;
    keyPath: DbKeyPath;
    mode: DbMode;
}

export interface IGetDbParamsHandleUpgradeNeeded extends Pick<IDbParams, 'db'>{}

export interface IDbParams {
    db: IDBDatabase;
    transaction: IDBTransaction;
    store: IDBObjectStore;
}

export interface ILoadRemoteScriptParams {
    src: string;
}

export interface ILoadRemoteStylesheetScriptParams {
    href: string;
}

export interface IIsJsonScript {
    script: HTMLScriptElement;
}

export interface ILoadLocalScriptParams {
    name: string;
    removeFromDom?: boolean;
    workerDependency?: boolean;
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

export interface IJsonJsonLd {
    index: number;
    fields: {
        [key: string]: string[];
    }
}

export interface ILoadScript {
    params: LocalScriptParams
        | LocalStylesheetScriptParams
        | ILoadRemoteScriptParams
        | ILoadRemoteStylesheetScriptParams
        | ILoadJsonScriptParams;
    reject: (error: Error) => void
}

export interface ILoadScriptLoadJsJsonJs {
    src: string;
    workerDependency?: boolean;
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
    selector?: string;
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

export interface IGetJsonLdArray {
    jsonLd: IAnyObject;
}

export interface IGetJsonLdArrayGetEntry {
    key: string;
    value: string | IAnyObject | IAnyObject[];
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

export interface IDispatchEvent {
    eventName: EventName;
    detail?: IAnyObject;
}

export interface IGetBabelJs {
    url?: string;
    js?: string;
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
    loadJsonJsonLd?: boolean;
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
    params: IAnyObject & {
        messageId?: string;
    };
}

export interface IRemoveRedundantScripts {
    selector: string;
}

export interface IRemoveRedundantScriptsRemoveScripts extends IRemoveRedundantScripts {
    parent: HTMLElement;
}

export interface IRemoveRedundantScriptsRemoveScriptsFromParent extends IRemoveRedundantScriptsRemoveScripts {
    resolve?: () => void;
    reject?: (error: Error) => void;
}

export interface ISupport {
    localStorage: boolean;
    indexedDb: boolean;
    indexedDbIsAccessible: boolean;
    worker: boolean;
    sharedWorker: boolean;
    textEncoder: boolean;
    textDecoder: boolean;
}

export interface ISaveSupport extends ISupport {
    environment: Environment;
}

export interface ISaveWebComponentData extends IWebComponentData {}

export interface IGetWebComponentData {
    key: string;
}

export interface IGetDbName {
    dbName: DbName
}

export interface ISaveIndexedDbData {
    storeName: DbStoreName;
    keyPath: DbKeyPath;
    messageId?: string;
    data: IWebComponentData | ISupport;
}

export interface IGetIndexedDbData {
    storeName: DbStoreName;
    keyPath: DbKeyPath;
    key: string;
    messageId?: string;
}

export interface ISaveIndexedDbDataHandleSuccess {
    messageId?: string;
    key: string;
}

export interface IWebComponentData {
    url: string;
    created?: number;
    messageId?: string;
    jsonLd: IAnyObject[];
    json: IAnyObject;
}

export interface ISaveWebComponentDataWorker extends ISaveWebComponentData {}

export interface IMessageQueueEntry {
    resolve: (result: any) => void;
    reject: (reason: Error) => void;
}

export interface IQueue extends NonNullable<Pick<IMessageQueueEntry, 'resolve' | 'reject'>> {
    key: string;
}

export interface IQueueHandleExpiredQueueEntry {
    key: string;
    queueEntry: IMessageQueueEntry;
}

export interface ILoadData {
    url: string;
    loadJsonJsonLd?: boolean;
}

export interface ILoadDataGetFeldData {
    key: string;
    urls: string[];
}

export interface ILoadDataGetJsonJsonLd extends IJsonJsonLd {}

export interface IGetMicrodataCaption {
    imageData: IAnyObject;
    fieldKey: string;
}

export interface IGetTemplate {
    selector: Selector;
    attributes?: IAttributes;
    properties?: IProperties;
}

export interface IProperties {
    name?: string;
    src?: string;
    alt?: string;
    innerHTML?: string;
}

export interface IGetTabLink {
    href: string;
    text: string;
}

export type WebComponentDataResolve = (webComponent: IJsonData | undefined) => void;

export type ErrorResolve = (error: Error) => void;

export type MessageResponse = IMessageAction | undefined | null | false;

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

export type DependencyKey = keyof typeof Dependency;

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
    pause: ({ milliseconds }: IPause) => Promise<unknown>;
    getElement: <P extends GetElementParams>(params: P) => Promise<HTMLElement>;
    getData: ({ jsonLd }: IGetData) => Promise<IJsonData>;
    getEnvironment: () => Environment;
    environment: Environment;
    getMicrodataCaption: (params: IGetMicrodataCaption) => HTMLElement | null | undefined
    messageQueue: Map<string, Set<IMessageQueueEntry>>;
    worker?: Worker;
    support?: ISupport;
    workerSupport?: ISupport;
    getJsonLdArray: ({ jsonLd }: IGetJsonLdArray) => Promise<string[][]>;
};

export interface IAttributes {
    id?: string;
    for?: string;
    slot?: string;
    'data-image-figure'?: string;
    'data-json-ld'?: string;
    itemprop?: string;
}

export type JsonDataResolve = (data: IJsonData) => void;

export type WorkerPostMessage = (message: string | Uint8Array) => void;

export type GetIndexedDbData<P extends IGetIndexedDbData> =
    P['keyPath'] extends DbKeyPath.webComponent ? IWebComponentData | undefined :
    P['keyPath'] extends DbKeyPath.support ? ISaveSupport :
    never;

export type DbKeyPathName = keyof typeof DbKeyPath;

export type DbStoreNameKey = keyof typeof DbStoreName;

export type AttributesKey = keyof IAttributes;

export type GetTemplate<P extends IGetTemplate> =
    P['selector'] extends Selector.a ? HTMLAnchorElement :
    P['selector'] extends  Selector.linkedDataCaptionElement ? HTMLSpanElement :
    P['selector'] extends Selector.linkedDataCaption ? HTMLElement :
    null;

declare global {
    interface Window extends TsLib {
        VamtigerBrowserMethod: VamtigerBrowserMethod;
        Babel: any;
        EQCSS: IAnyObject;
        requestIdleCallback?: typeof requestIdleCallback;
        _: typeof lodash;
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
    nonWord: /\W+/g,
    backTicks: /`/gm,
    remoteUrl: /^http(s)?/i,
    jsJsonJs: /\.js\.json\.js$/,
    jsonJs: /\.json\.js$/,
    trailingJs: /\.js$/,
    uppercase: /[A-Z]/,
    leadingAt: /^@/
}

export const selector = {
    worker: [
        Selector.vamtigerBrowserMethod
    ].join(StringConstant.comma),
    redundantScripts: [
        Selector.vamtigerBrowserMethodJsonJs,
        Selector.vamtigerBrowserMethodJson,
        Selector.vamtigerBrowserMethod
    ].join(StringConstant.comma)
}

export const sendMessageFromWorker = postMessage as WorkerPostMessage;