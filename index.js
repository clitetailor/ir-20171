#!/usr/bin/env node
let program = require('commander');
let init = require('./app')

program
	.version('0.1.0')
	.arguments('<path-to-input-file>', 'For example: crawler ./test/data')
	.option('-o --out <output-file>', 'For example: crawler ./test/data --out ./output')
	.action(init);

program.parse(process.argv);