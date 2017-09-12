let request = require('request-promise');
let cheerio = require('cheerio');

module.exports = function (site) {
	console.log('  HTTP GET     ' + site.url);

	return request(site).then(siteContent => {
		console.log('  Rendering    ' + site.url);

		let $ = cheerio.load(siteContent);

		let title = site.titleSelector ? $(site.titleSelector).first().text() : $('title').first().text();
		let content = $(site.contentSelector).toArray()
			.map(paragraph => {
				return $(paragraph).text();
			})
			.reduce((accumulate, paragraph) => {
				return accumulate.concat(paragraph);
			}, '');
		
		let siteData = {
			url: site.url,
			title: title,
			content: content,
			relevence: site.relevence
		}

		console.log('  Rendered     ' + site.url);

		return siteData;
	}).catch(error => {
		console.log('  HTTP FAILED  ' + site.url);
		console.log('    ERROR         ' + error);
	})
}