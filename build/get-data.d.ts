import { IGetData, IAnyObject } from './types';
export default function <D extends IAnyObject>({ jsonLd }: IGetData): Promise<D>;
