import { LocalScriptParams, LocalStylesheetScriptParams, ILoadRemoteStylesheetScriptParams, ILoadRemoteScriptParams, LoadedScript } from './types';
declare const _default: <P extends ILoadRemoteScriptParams | ILoadRemoteStylesheetScriptParams | LocalScriptParams | LocalStylesheetScriptParams>(params: P) => Promise<LoadedScript<P>>;
export default _default;
