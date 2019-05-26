import {
    Environment
} from './types';

export default function () {
    const { VamtigerBrowserMethod } = self;
    const { envrironment } = VamtigerBrowserMethod;
    const isWorker = envrironment === Environment.worker;

    return isWorker;
}