import { IGetElementUrl } from './types';
export default function ({ name, url, selector }: IGetElementUrl): Promise<HTMLElement>;
