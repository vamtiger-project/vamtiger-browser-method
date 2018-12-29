import * as tslib from '../node_modules/tslib/tslib';

export enum ErrorMessage {
    failedToLoadScript = 'Failed to load script',
    windowPropertyNotSet = 'Window property not set'
}

export enum StringConstant {
    slash = '/'
}

export interface ILoadScript {
    params: {
        src: string;
    },
    resolve: (script: HTMLScriptElement) => void;
    reject: (error: Error) => void
}

export type TsLibType = typeof tslib;

export type TsLibKey = keyof TsLibType;

export type TsLib = {
    [K in TsLibKey]: TsLibType[K]
}

declare global {
    interface Window extends TsLib {
        VamtigerBrowserMethod: {
            loadScript: (params: ILoadScript['params']) => Promise<HTMLScriptElement>
        };
    }
}