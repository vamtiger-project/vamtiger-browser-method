import { LocalScriptParams, LocalStylesheetScriptParams, ILoadRemoteStylesheetScriptParams, ILoadRemoteScriptParams, ILoadJsonScriptParams, LoadedScript } from './types';
declare const _default: <P extends ILoadRemoteScriptParams | ILoadRemoteStylesheetScriptParams | ILoadJsonScriptParams | LocalScriptParams | LocalStylesheetScriptParams>(params: P) => Promise<LoadedScript<P>>;
export default _default;
