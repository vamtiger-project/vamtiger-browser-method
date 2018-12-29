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
const emptyScript = resolvePath(
    __dirname,
    'empty-script.js'
);

describe('Generate', function () {
    before(async function () {
        await Promise.all([
            copyFile({
                source: testHtmlSource,
                destination: testHtmlDestination
            }),

            createFile(emptyScript, `console.log('Empty Script');`)
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