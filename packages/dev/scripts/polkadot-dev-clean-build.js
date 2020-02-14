#!/usr/bin/env node
// Copyright 2017-2020 @polkadot/dev authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

const ROOT = path.join(process.cwd(), 'packages');

function main () {
  fs
    .readdirSync(ROOT)
    .map((file) => path.join(ROOT, file))
    .filter((file) => fs.statSync(file).isDirectory())
    .concat(['.'])
    .reduce((arr, dir) => arr.concat(path.join(dir, 'build'), path.join(dir, 'build-docs')), [])
    .forEach((dir) => rimraf.sync(dir));
}

main();