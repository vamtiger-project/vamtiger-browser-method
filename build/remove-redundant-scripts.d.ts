import { IRemoveRedundantScripts, IRemoveRedundantScriptsRemoveScripts } from './types';
export default function (params: IRemoveRedundantScripts): Promise<void>;
export declare function removeScripts(params: IRemoveRedundantScriptsRemoveScripts): Promise<unknown>;
export declare function removeDuplicateScripts(params: IRemoveRedundantScriptsRemoveScripts): Promise<unknown>;
export declare function sendRemoveRedundantScriptsMessage({ selector }: IRemoveRedundantScripts): void;
