import {
    Environment
} from './types';

export default function () {
    const environment = self.hasOwnProperty('WorkerGlobalScope')
        && Environment.worker
        || Environment.window;

    return environment;
}