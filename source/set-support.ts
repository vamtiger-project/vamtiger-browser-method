import {
    ISupport,
    MessageAction,
    DbStoreName,
    DbKeyPath,
    TimeoutDuration,
    Environment
} from './types';
import isWorker from './is-worker';
import sendMessage from './send-message';
import getData from './get-indexed-db-data';
import saveSupport from './save-support';

const { support: keyPath } = DbKeyPath;
const { support: storeName } = DbStoreName

export default async function () {
    const {
        VamtigerBrowserMethod,
        localStorage,
        indexedDB,
    } = self;
    const [indexedDbIsAccessible] = await Promise.all([
        indexDbAccessible()
    ]);
    const support: ISupport = {
        localStorage: localStorage ? true : false,
        indexedDb: indexedDB ? true : false,
        indexedDbIsAccessible,
        worker: self.hasOwnProperty('Worker') ? true : false,
        sharedWorker: self.hasOwnProperty('SharedWorker'),
        textEncoder: self.hasOwnProperty('TextEncoder'),
        textDecoder: self.hasOwnProperty('TextDecoder')
    };

    VamtigerBrowserMethod.support = support;

    isWorker() && sendWorkerSupport();
}

export function indexDbAccessible() {return new Promise(async (resolve: (indexDbAccessible: boolean) => void, reject) => {
    let indexedDbIsAccessible = false;
    let resolved = false;
    const environment = Environment.worker;
    const timeout = setTimeout(() => !resolved && resolve(indexedDbIsAccessible), TimeoutDuration.indexDbIsAccessible);

    await getData({
        storeName,
        keyPath,
        key: environment
    });

    indexedDbIsAccessible = true;
    resolved = true;

    resolve(indexedDbIsAccessible);
})}

export async function setWorkerSupport(workerSupport: ISupport) {
    const { VamtigerBrowserMethod } = self;
    const { support, environment } = VamtigerBrowserMethod;

    VamtigerBrowserMethod.workerSupport = workerSupport;

    support && saveSupport({
        environment,
        ...support
    });

    workerSupport && saveSupport({
        environment: Environment.worker,
        ...workerSupport
    });
}

function sendWorkerSupport() {
    const { VamtigerBrowserMethod } = self;
    const message = {
        action: MessageAction.setWorkerSupport,
        params: VamtigerBrowserMethod.support || {}
    };

    sendMessage(message);
}