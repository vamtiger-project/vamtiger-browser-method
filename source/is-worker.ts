import {
    Environment
} from './types';

export default function () {
    const { VamtigerBrowserMethod } = self;
    const { environment } = VamtigerBrowserMethod;
    const isWorker = environment === Environment.worker;

    return isWorker;
}