import * as tslib from '../node_modules/tslib/tslib';
export declare enum ErrorMessage {
    failedToLoadScript = "Failed to load script",
    windowPropertyNotSet = "Window property not set"
}
export declare enum StringConstant {
    slash = "/"
}
export interface ILoadScript {
    params: {
        src: string;
    };
    resolve: (script: HTMLScriptElement) => void;
    reject: (error: Error) => void;
}
export declare type TsLibType = typeof tslib;
export declare type TsLibKey = keyof TsLibType;
export declare type TsLib = {
    [K in TsLibKey]: TsLibType[K];
};
declare global {
    interface Window extends TsLib {
        VamtigerBrowserMethod: {
            loadScript: (params: ILoadScript['params']) => Promise<HTMLScriptElement>;
        };
    }
}
