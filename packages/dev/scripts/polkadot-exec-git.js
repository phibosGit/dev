#!/usr/bin/env node
// Copyright 2017-2020 @polkadot/dev authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

const execSync = require('./execSync');

const argv = process.argv.slice(2).join(' ');

console.log('$ git', argv);

execSync(`git ${argv}`);