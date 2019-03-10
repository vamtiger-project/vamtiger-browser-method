import {
    GetElementParams,
    IGetElementTemplate,
    IGetElementUrl
} from './types';
import getElementFromTemplate from './get-element-from-template';
import getElementFromUrl from './get-element-from-url';

export default async function<P extends GetElementParams>(params: P) {
    if ((params as IGetElementUrl).url) {
        return await getElementFromUrl(params as IGetElementUrl);
    } else {
        return getElementFromTemplate(params as IGetElementTemplate);
    }
}