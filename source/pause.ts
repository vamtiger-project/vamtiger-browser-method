import { IPause } from './vamtiger-browser-method';

export default ({ milliseconds = 1000 }: IPause) => new Promise((resolve, reject) => setTimeout(resolve, milliseconds));