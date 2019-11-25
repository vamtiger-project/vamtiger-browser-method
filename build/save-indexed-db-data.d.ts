import { ISaveIndexedDbData } from './types';
export default function ({ storeName, keyPath, data, messageId, successAction: action }: ISaveIndexedDbData): Promise<void>;
