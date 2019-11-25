import { ISendMessageFromServiceWorker } from './types';
export default function ({ clients: type, message }: ISendMessageFromServiceWorker): Promise<void>;
