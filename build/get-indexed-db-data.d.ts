import { IGetIndexedDbData, GetIndexedDbData } from './types';
export default function <P extends IGetIndexedDbData>({ storeName, keyPath, key }: P): Promise<GetIndexedDbData<P>>;
