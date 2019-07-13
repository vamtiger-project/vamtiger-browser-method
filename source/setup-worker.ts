import {
    selector
} from './types'
import handleMessage from './handle-message';
import isWorker from './is-worker';
import removeRedundantScripts from './remove-redundant-scripts';

export default function () {
    isWorker() && setupWorker();
}

function setupWorker() {
    addEventListener('message', handleMessage);

    return removeRedundantScripts({
        selector: selector.redundantScripts
    });
}