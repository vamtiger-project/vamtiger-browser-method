import {
    IQueue,
    IMessageQueueEntry,
    IQueueHandleExpiredQueueEntry,
    TimeoutDuration
} from './types';

const { webComponent: timeout } = TimeoutDuration;

export default function ({key, resolve, reject }: IQueue) {
    const { VamtigerBrowserMethod } = self;
    const queueEntry = {
        resolve,
        reject
    };
    const { messageQueue } = VamtigerBrowserMethod;

    let queue: Set<IMessageQueueEntry> | undefined;

    !messageQueue.has(key) && messageQueue.set(key, new Set());

    queue = messageQueue.get(key);

    queue && queue.add(queueEntry);

    setTimeout(() => handleExpiredQueueEntry({ key, queueEntry }), timeout)
}

function handleExpiredQueueEntry({ key, queueEntry }: IQueueHandleExpiredQueueEntry) {
    const { VamtigerBrowserMethod } = self;
    const { messageQueue } = VamtigerBrowserMethod;
    const queue = messageQueue.get(key);

    if (queue) {
        queue.has(queueEntry) && queue.delete(queueEntry);

        !queue.size && messageQueue.delete(key);
    }
}