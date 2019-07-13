import {
    ISaveIndexedDbData,
    ISaveIndexedDbDataHandleSuccess,
    DbMode,
    MessageAction
} from './types';
import getDbParams from './get-db-params';
import sendMessage from './send-message';

const { readwrite: mode } = DbMode;

export default async function ({ storeName, keyPath, data, messageId, successAction: action }: ISaveIndexedDbData) {
    const { store } = await getDbParams({
        storeName,
        keyPath,
        mode
    });
    const save = store.put(data);

    save.addEventListener('error', handleError);
    save.addEventListener('success', () => handleSuccess({ messageId, key: keyPath, action, data }));
}

function handleSuccess(params: ISaveIndexedDbDataHandleSuccess) {
    const {
        action,
        data
    } = params;
    const message = action && {
        action,
        params: {
            ...params,
            ...data
        }
    };

    message && sendMessage(message);
}

function handleError(error: Event) {
    console.error(error);
    throw error;
}