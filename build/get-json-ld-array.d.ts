import { IGetJsonLdArray } from './types';
export default function (params: IGetJsonLdArray): Promise<string[][]>;
export declare function getJsonLdArray({ jsonLd: currentJsonLd }: IGetJsonLdArray): Promise<string[][]>;
