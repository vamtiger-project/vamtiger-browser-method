import {
    IGetIndexedDbData,
    GetIndexedDbData,
    DbMode
} from './types';
import getDbParams from './get-db-params';

const { readonly: mode } = DbMode;

export default async function <P extends IGetIndexedDbData>({ storeName, keyPath, key }: P): Promise<GetIndexedDbData<P>> {return new Promise(async (resolve, reject) => {
    const { store } = await getDbParams({
        storeName,
        keyPath,
        mode
    });
    const get = key && store.get(key) || store.getAll();

    get.addEventListener('error', reject);
    get.addEventListener('success', () => resolve(get.result));
})}