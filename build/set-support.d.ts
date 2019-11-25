import { ISupport } from './types';
export default function (): Promise<void>;
export declare function indexDbAccessible(): Promise<boolean>;
export declare function setWorkerSupport(currentSupport: ISupport): Promise<void>;
