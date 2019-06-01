import {
    IDequeue
} from './types';

export default function ({ key, data }: IDequeue) {
    const { VamtigerBrowserMethod } = self;
    const { messageQueue } = VamtigerBrowserMethod;
    const queue = messageQueue.get(key) || new Set();

    Array.from(queue).forEach((queueEntry) => {
        queueEntry.resolve(data);

        queue.delete(queueEntry);
    });
}