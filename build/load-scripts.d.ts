import { LoadScriptsParams, LoadedScripts } from './types';
export default function <P extends LoadScriptsParams>(params: P): Promise<LoadedScripts<P>>;
