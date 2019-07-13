import {
    MessageAction,
    DbKeyPath,
    DbStoreName,
    Selector,
    StringConstant,
    ScriptName,
    regex
} from './types';
import isWindow from './is-window';
import isWorker from './is-worker';
import sendMessage from './send-message';
import getData from './get-indexed-db-data';
import loadScript from './handle-load-script';

const { customElementName: keyPath } = DbKeyPath;
const { customElementName: storeName } = DbStoreName;
const { comma, semiColon, nothing } = StringConstant;
const { textModeElement } = regex;

export default function() {
    isWindow() && getTextModeCssWindow();
    isWorker() && getTextModeCssWorker();
}

function getTextModeCssWindow() {
    const { VamtigerBrowserMethod } = self;
    const { support, workerSupport, textMode } = VamtigerBrowserMethod;
    const message = workerSupport && workerSupport.indexedDbIsAccessible && {
        action: MessageAction.getTextModeCss,
        params: {}
    };

    if (textMode && message) {
        sendMessage(message);
    } else if (textMode && support && support.indexedDbIsAccessible) {
        getTextModeCssWindowIndexDb()
    } else {
        getTextModeCssFromMetaElement()
    }
}

async function getTextModeCssWindowIndexDb() {
    const customElementNames = await getData({
        storeName,
        keyPath
    }) || [];
    const names = customElementNames.map(({ name }) => name);
    const css = getCss(names);
    const params = css && {
        name: ScriptName.textMode,
        css,
        removeExisting: true
    };

    params && loadScript(params);
}

async function getTextModeCssWorker() {
    const customElementNames = await getData({
        storeName,
        keyPath
    }) || [];
    const names = customElementNames.map(({ name }) => name);
    const css = getCss(names);
    const message = css && {
        action: MessageAction.loadScript,
        params: {
            name: ScriptName.textMode,
            css,
            removeExisting: true
        }
    };

    message && sendMessage(message);
}

function getTextModeCssFromMetaElement() {
    const { VamtigerBrowserMethod } = self;
    const { metaElement } = VamtigerBrowserMethod;
    const customElementMetaElement = metaElement && metaElement.querySelector<HTMLMetaElement>(Selector.customElementNameMetaElement);
    const names = customElementMetaElement && (Array
        .from(customElementMetaElement.children) as HTMLMetaElement[])
        .map(({ dataset }) => dataset.name || '')
        .filter(name => name)
        || [];
    const css = getCss(names);
    const params = css && {
        name: ScriptName.textMode,
        css,
        removeExisting: true
    };

    params && loadScript(params);
}

function getCss(names: string[]) {
    const selector = names
        .filter(name => !name.match(textModeElement))
        .map(name => `${Selector.htmlTextMode} ${name}`)
        .join(comma);
    const cssBody = selector && [
        'display: none'
    ].join(semiColon);
    const css = selector && cssBody && [
        selector,
        '{',
        cssBody,
        '}'
    ].join(nothing);

    return css;
}