let fs = require('fs-extra');
let path = require('path');
let url = require('url');
let chalk = require('chalk');
let render = require('./render');

module.exports = function (inputFile, options) {
	inputFile = path.resolve(process.cwd(), inputFile);
	let outputFile = path.resolve(process.cwd(), (options.outputFile || inputFile) + '.json');

	console.log(chalk.green('=> Reading input file     ' + inputFile));

	let data = fs.readFileSync(inputFile, 'utf-8');

	console.log(chalk.blue('=> Read file done!'));

	let lines = data.split('\n');
	let sites = lines
		.map(line =>
			line.split(/,/)
				.map(cell => cell.trim()))
		.map(line => {
			return {
				url: line[0],
				relevence: line[1],
				titleSelector: line[2],
				contentSelector: line[3]
			}
		});
	

	console.log(chalk.green('=> Sending requests to sites:'))
	
	let rendering = Promise.all(sites.map(render));
	
	rendering.then(renderedSites => {
		renderedSites = renderedSites
			.filter(site => site !== null && site !== undefined);

		let outputData = {
			sites: renderedSites
		}

		console.log(chalk.green('=> Writing output to file     ' + outputFile));

		fs.writeFileSync(outputFile, JSON.stringify(outputData, null, 2));
	
		console.log(chalk.yellow('Done!'))
	})
		.catch(error => {
			console.log('' + error);
		})
}