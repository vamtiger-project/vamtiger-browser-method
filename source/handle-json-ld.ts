import {
    HandleJsonLdAction,
    IHandleJsonLd
} from './types';
import {
    handleJsonLdAction
} from './config';
import getUrlFromQueue from './get-url-from-queue';
import saveWebComponentData from './save-web-component-data';

export default function (currentParams: IHandleJsonLd) {
    const { detail } = currentParams;
    const { action: actionName, params } = detail;
    const { key } = params;
    const url = getUrlFromQueue({url: key});
    const saveParams = handleJsonLdAction.has(actionName) && url && {
        ...params,
        url
    };

    saveParams && saveWebComponentData(saveParams);
}