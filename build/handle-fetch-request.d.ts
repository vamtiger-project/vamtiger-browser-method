import { FetchEvent } from './types';
export default function (event: FetchEvent): Promise<Response>;
export declare function isValidProtocol({ request }: FetchEvent): RegExpMatchArray | null;
