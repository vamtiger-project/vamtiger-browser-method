import {
    IGetData,
    ErrorMessage,
    GetDataResult
} from './types';
import getJsonLd from './get-json-ld';
import getJson from './get-json';

const { noJsonLdParameter } = ErrorMessage;

export default function <P extends IGetData>(params: P) { return new Promise(async (resolve: (data: GetDataResult<P>) => void, reject) => {
    const { requestIdleCallback } = self;
    const { textMode, jsonLd, json, dependency = false } = params;
    const jsonLdParams = jsonLd && { jsonLd };
    const jsonParams = json && { json, textMode, dependency};

    if (jsonParams) {
        if (requestIdleCallback) {
            requestIdleCallback(() => getJson(jsonParams).then((data) => resolve(data as GetDataResult<P>)).catch(reject));
        } else {
            setTimeout(() => getJson(jsonParams).then((data) => resolve(data as GetDataResult<P>)).catch(reject), 0);
        }
    } else if (jsonLdParams) {
        if (requestIdleCallback) {
            requestIdleCallback(() => getJsonLd(jsonLdParams).then((data) => resolve(data as GetDataResult<P>)).catch(reject));
        } else {
            setTimeout(() => getJsonLd(jsonLdParams).then((data) => resolve(data as GetDataResult<P>)).catch(reject), 0);
        }
    } else {
        reject(new Error(noJsonLdParameter));
    }
})}