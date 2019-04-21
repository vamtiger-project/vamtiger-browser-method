import { LoadedScriptsSequentially } from './types';
declare const _default: <P extends (import("./types").ILoadRemoteScriptParams | import("./types").ILoadRemoteStylesheetScriptParams | import("./types").LocalScriptParams | import("./types").LocalStylesheetScriptParams)[][]>(params: P) => Promise<LoadedScriptsSequentially<P>>;
export default _default;
