import {
    IDequeue
} from './types';

export default function ({ key, match = false, data, queue: currentQueue }: IDequeue) {
    const { VamtigerBrowserMethod } = self;
    const { messageQueue } = VamtigerBrowserMethod;
    const keyRegex = match && new RegExp(key);
    const queueKey = keyRegex && Array
        .from((currentQueue || messageQueue).keys())
        .find(key => key.match(keyRegex))
        || key;
    const queue = (currentQueue || messageQueue).get(queueKey) || new Set();

    Array.from(queue).forEach((queueEntry) => {
        queueEntry.resolve(data);

        queue.delete(queueEntry);
    });
}