import { createRequire } from 'module';
import { runOptionsTest } from './common.js';

const require = createRequire(import.meta.url);

const test = require('colored-tape');

test('afterEach', (t) => {
    runOptionsTest(t, {
        afterEach: ' processed!',
    });
});
