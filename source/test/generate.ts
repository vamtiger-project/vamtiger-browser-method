import { resolve as resolvePath, basename } from 'path';
import { expect } from 'chai';
import copyFile from 'vamtiger-copy-file';
import getFolderContent from 'vamtiger-get-directory-content';
import createFile from 'vamtiger-create-file';

const buildFolder = resolvePath(
    __dirname,
    '..'
);
const testHtmlSource = resolvePath(
    __dirname,
    '../../source/test/html/test.html'
);
const testHtmlDestination = resolvePath(
    __dirname,
    '../index.html'
);
const testTemplateSource = resolvePath(
    __dirname,
    '../../source/test/html/template.html'
);
const testTemplateDestination = resolvePath(
    __dirname,
    '../template.html'
);
const emptyScript = resolvePath(
    __dirname,
    'empty-script.js'
);
const emptyStylesheet = resolvePath(
    __dirname,
    'empty-stylesheet.css'
);

describe('Generate', function () {
    before(async function () {
        await Promise.all([
            copyFile({
                source: testHtmlSource,
                destination: testHtmlDestination
            }),
            copyFile({
                source: testTemplateSource,
                destination: testTemplateDestination
            }),
            createFile(emptyScript, `console.log('Empty Script');`),
            createFile(emptyStylesheet, '')
        ]);
    });

    it('Test Preview', async function() {
        const folderContent = await getFolderContent(buildFolder)
            .then(result => new Set(result));

        class Test {
            test() {
                console.log();
            }
        }

        const test = new Test();
        test.test();

        expect(folderContent.has(basename(testHtmlDestination))).to.be.true;
    })
});