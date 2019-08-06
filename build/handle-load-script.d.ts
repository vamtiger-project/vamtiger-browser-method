import { ILoadScript } from './types';
export default function <P extends ILoadScript['params']>(params: P): Promise<unknown>;
