import { GetElementParams } from './types';
export default function <P extends GetElementParams>(params: P): Promise<HTMLElement>;
