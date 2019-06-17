import * as tslib from 'tslib/tslib';
import { requestIdleCallback } from 'requestidlecallback';
export declare enum Environment {
    window = "window",
    worker = "worker"
}
export declare enum TimeoutDuration {
    webComponent = 60000,
    indexDbIsAccessible = 100
}
export declare enum MessageQueueName {
    webComponent = "webComponent"
}
export declare enum Prefix {
    vamtigerBrowserMethod = "vamtiger-browser-method",
    db = "vamtiger-browser-method",
    messageIdWindow = "vamtiger-browser-method-window",
    messageIdWorker = "vamtiger-browser-method-worker"
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
    babel = "text/babel",
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
    doubleQuote = "\"",
    commaSpace = ", "
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
    vamtigerBrowserMethod = "[data-name$=\"vamtiger-browser-method.js\"]",
    script = "script",
    jsonScript = "script[type=\"application/json\"]",
    jsonLdScript = "script[type=\"application/ld+json\"]",
    a = "a",
    linkedDataCaption = "[data-linked-data-caption]",
    linkedDataCaptionElement = "[data-linked-data-caption-element]"
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
    removeRedundantScripts = "removeRedundantScripts",
    setWorkerSupport = "setWorkerSupport",
    saveWebComponentData = "saveWebComponentData",
    getWebComponentData = "getWebComponentData",
    dequeue = "dequeue",
    loadWebComponentData = "loadWebComponentData",
    saveSupport = "saveSupport"
}
export declare enum DbName {
    vamtigerBrowserSupport = "vamtiger-browser-support"
}
export declare enum DbStoreName {
    support = "support",
    webComponent = "web-component"
}
export declare enum DbMode {
    readonly = "readonly",
    readwrite = "readwrite",
    versionchange = "versionchange"
}
export declare enum DbKeyPath {
    webComponent = "url",
    support = "environment"
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
export interface IGetDbParamsHandleUpgradeNeeded extends Pick<IDbParams, 'db'> {
}
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
    transpileJs?: boolean;
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
    };
}
export interface ILoadScript {
    params: LocalScriptParams | LocalStylesheetScriptParams | ILoadRemoteScriptParams | ILoadRemoteStylesheetScriptParams | ILoadJsonScriptParams;
    reject: (error: Error) => void;
}
export interface ILoadScriptLoadJsJsonJs {
    src: string;
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
export interface ISaveWebComponentData extends IWebComponentData {
}
export interface IGetWebComponentData {
    key: string;
}
export interface IGetDbName {
    dbName: DbName;
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
export interface ISaveWebComponentDataWorker extends ISaveWebComponentData {
}
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
export interface ILoadDataGetJsonJsonLd extends IJsonJsonLd {
}
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
export declare type WebComponentDataResolve = (webComponent: IJsonData | undefined) => void;
export declare type ErrorResolve = (error: Error) => void;
export declare type MessageResponse = IMessageAction | undefined | null | false;
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
    pause: ({ milliseconds }: IPause) => Promise<unknown>;
    getElement: <P extends GetElementParams>(params: P) => Promise<HTMLElement>;
    getData: ({ jsonLd }: IGetData) => Promise<IJsonData>;
    getEnvironment: () => Environment;
    environment: Environment;
    getMicrodataCaption: (params: IGetMicrodataCaption) => HTMLElement | null | undefined;
    messageQueue: Map<string, Set<IMessageQueueEntry>>;
    worker?: Worker;
    support?: ISupport;
    workerSupport?: ISupport;
};
export interface IAttributes {
    id?: string;
    for?: string;
    slot?: string;
    'data-image-figure'?: string;
    'data-json-ld'?: string;
    itemprop?: string;
}
export declare type JsonDataResolve = (data: IJsonData) => void;
export declare type WorkerPostMessage = (message: string | Uint8Array) => void;
export declare type GetIndexedDbData<P extends IGetIndexedDbData> = P['keyPath'] extends DbKeyPath.webComponent ? IWebComponentData | undefined : P['keyPath'] extends DbKeyPath.support ? ISaveSupport : never;
export declare type DbKeyPathName = keyof typeof DbKeyPath;
export declare type DbStoreNameKey = keyof typeof DbStoreName;
export declare type AttributesKey = keyof IAttributes;
export declare type GetTemplate<P extends IGetTemplate> = P['selector'] extends Selector.a ? HTMLAnchorElement : P['selector'] extends Selector.linkedDataCaptionElement ? HTMLSpanElement : P['selector'] extends Selector.linkedDataCaption ? HTMLElement : null;
declare global {
    interface Window extends TsLib {
        VamtigerBrowserMethod: VamtigerBrowserMethod;
        Babel: any;
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
    remoteUrl: RegExp;
    jsJsonJs: RegExp;
    jsonJs: RegExp;
};
export declare const selector: {
    worker: string;
    redundantScripts: string;
};
export declare const sendMessageFromWorker: WorkerPostMessage;
