import { IGetDbParams, IDbParams } from './types';
export default function (params: IGetDbParams): Promise<IDbParams>;
export declare function getDb(): Promise<IDBDatabase>;
