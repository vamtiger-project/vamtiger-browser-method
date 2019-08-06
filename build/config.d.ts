import { Dependency } from './types';
export declare const babel: {
    presets: string[];
};
export declare const jsonLdEntryValueType: Set<"string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function">;
export declare const dependencyPaths: string[];
export declare const getDependencies: () => string[];
export declare const intersectionObserverThreshold: number[];
export declare const intersectionObserver: {
    root: null;
    rootMargin: string;
    threshold: number[];
};
export declare const serviceWorker: {
    scope: string;
};
export declare const serviceWorkerClients: {
    includeUncontrolled: boolean;
};
export declare const workerDependencies: Dependency[];
