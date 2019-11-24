import {
    IDequeue
} from './types';

export default function ({ key, match = false, data }: IDequeue) {
    const { VamtigerBrowserMethod } = self;
    const { queue: currentQueue } = VamtigerBrowserMethod;
    const keyRegex = match && new RegExp(key);
    const queueKey = keyRegex && Array
        .from(currentQueue.keys())
        .find(key => key.match(keyRegex))
        || key;
    const queue = currentQueue.get(queueKey) || new Set();

    Array.from(queue).forEach((queueEntry) => {
        queueEntry.resolve(data);

        queue.delete(queueEntry);
    });
}