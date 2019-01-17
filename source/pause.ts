import { IPause } from './types';

export default ({ milliseconds = 1000 }: IPause) => new Promise((resolve, reject) => setTimeout(resolve, milliseconds));