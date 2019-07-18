import { GetElementParams } from './types';
export default function <P extends GetElementParams>(params: P): Promise<HTMLElement>;
export declare function getElement<P extends GetElementParams>(params: P, resolve: (element: HTMLElement) => void): Promise<void>;
