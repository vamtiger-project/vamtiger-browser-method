import { IPause } from './types';

export default ({ milliseconds }: IPause) => new Promise((resolve, reject) => setTimeout(resolve, milliseconds));