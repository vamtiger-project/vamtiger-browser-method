import {
    ISaveIndexedDbData,
    ISaveIndexedDbDataHandleSuccess,
    DbMode,
    MessageAction
} from './types';
import getDbParams from './get-db-params';
import sendMessage from './send-message';

const { readwrite: mode } = DbMode;
const { getWebComponentData: action } = MessageAction;

export default async function ({ storeName, keyPath, data, messageId }: ISaveIndexedDbData) {
    const { store } = await getDbParams({
        storeName,
        keyPath,
        mode
    });
    const save = store.put(data);

    save.addEventListener('error', handleError);
    save.addEventListener('success', () => handleSuccess({ messageId, key: keyPath }));
}

function handleSuccess({ messageId, key }: ISaveIndexedDbDataHandleSuccess) {
    const message = messageId && {
        action,
        params: {
            messageId,
            key
        }
    };

    message && sendMessage(message);
}

function handleError(error: Event) {
    console.error(error);
    throw error;
}