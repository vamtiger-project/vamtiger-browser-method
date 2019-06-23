import { ILoadScript, LoadedScript } from './types';
export default function <P extends ILoadScript['params']>(params: P): Promise<LoadedScript<P>>;
