import {
    IGetDbParams,
    IGetDbParamsHandleUpgradeNeeded,
    IDbParams,
    DbName,
    DbStoreName,
    DbStoreNameKey,
    DbKeyPathName,
    DbKeyPath
} from './types';

const { vamtigerBrowserSupport: dbName } = DbName;

export default async function (params: IGetDbParams) {
    const { storeName, keyPath, mode } = params;
    const db = await getDb();
    const transaction = db && db.transaction && db.transaction(storeName, mode);
    const store = transaction && transaction.objectStore && transaction.objectStore(storeName);
    const dbParams: IDbParams = {
        db,
        transaction,
        store
    };

    return dbParams;
}

export function getDb() {return new Promise((resolve: (db: IDBDatabase) => void, reject) => {
    const dbRequest = indexedDB.open(dbName, 1);

    dbRequest.addEventListener('error', reject);

    dbRequest.addEventListener('upgradeneeded', () => handleUpgradeNeeded({ db: dbRequest.result }));

    dbRequest.addEventListener('success', () => resolve(dbRequest.result));
})}

function handleUpgradeNeeded({ db }: IGetDbParamsHandleUpgradeNeeded) {
    const storeNames = Object.keys(DbKeyPath);

    storeNames.forEach(storeName => !db.objectStoreNames.contains(storeName) && db.createObjectStore(DbStoreName[storeName as DbStoreNameKey], {
        keyPath: DbKeyPath[storeName as DbKeyPathName]
    }));
}