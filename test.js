import assert from 'assert/strict'

import { add } from './index.js'


function main() {
  assert.deepEqual(add(1, 2), 3);
}

main()