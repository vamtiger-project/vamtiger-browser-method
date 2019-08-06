import {
    IQueue,
    IQueueEntry,
    IQueueHandleExpiredQueueEntry,
    TimeoutDuration
} from './types';

const { webComponent: timeout } = TimeoutDuration;

export default function ({key, resolve, reject, queue: currentQueue }: IQueue) {
    const queueEntry = {
        resolve,
        reject
    };

    let queue: Set<IQueueEntry> | undefined;

    !currentQueue.has(key) && currentQueue.set(key, new Set());

    queue = currentQueue.get(key);

    queue && queue.add(queueEntry);

    setTimeout(() => handleExpiredQueueEntry({ key, queueEntry, queue: currentQueue }), timeout)
}

function handleExpiredQueueEntry({ key, queueEntry, queue: currentQueue }: IQueueHandleExpiredQueueEntry) {
    const queue = currentQueue.get(key);

    if (queue) {
        queue.has(queueEntry) && queue.delete(queueEntry);

        !queue.size && currentQueue.delete(key);
    }
}
