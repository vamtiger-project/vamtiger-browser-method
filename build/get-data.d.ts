import { IGetData, GetDataResult } from './types';
export default function <P extends IGetData>(params: P): Promise<GetDataResult<P>>;
