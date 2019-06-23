import { IRemoveRedundantScripts, IRemoveRedundantScriptsRemoveScripts } from './types';
export default function (params: IRemoveRedundantScripts): Promise<void>;
export declare function removeScripts(params: IRemoveRedundantScriptsRemoveScripts): Promise<{}>;
export declare function removeDuplicateScripts(params: IRemoveRedundantScriptsRemoveScripts): Promise<{}>;
export declare function sendRemoveRedundantScriptsMessage({ selector }: IRemoveRedundantScripts): void;
