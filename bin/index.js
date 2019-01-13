#!/usr/bin/env node
const curl = require('curl');
const colors = require('colors');
const argv = require('yargs').argv;
const os = require('os');
const path = require('path');
const fs = require('fs');
const util = require('util');
const Spinner = require('cli-spinner').Spinner;

const spinner = new Spinner('processing.. %s');
const platform = os.platform();
const desk = path.join(os.homedir(), 'Desktop');
const url = `${argv.c}`;

console.log(typeof desk)


spinner.setSpinnerString('|/-\\');
spinner.start();
const scrape = curl.get(url, function(err, response, body) {
	if (err) {
		console.log(
			colors.red(
				'  🔥  🔥  🔥  🔥  🔥  🔥  🔥  🔥  🔥  🔥  🔥  🔥  🔥  🔥  🔥  🔥  '
			)
		);
		console.log(
			colors.yellow(
				'\nNo valid url please enter a valid url following the -c flag... \nSuch as:\nscrape -c https://google.com'
			)
		);
		console.log(
			'\n  🔥  🔥  🔥  🔥  🔥  🔥  🔥  🔥  🔥  🔥  🔥  🔥  🔥  🔥  🔥  🔥  '
		);
		spinner.stop();
	} else {
		spinner.stop();
		console.log(colors.green('\n✅  Success!\n'));
		fs.writeFile(`${desk}/index-${Date.now()}.html`, body, function(err) {
			if (err) return console.log(err);
			console.log(
				colors.magenta(
					`👍  Just made a html document from: ${colors.cyan(
						url
					)}\n👁️  ${colors.yellow('Check your desktop?')}`
				)
			);
		});
	}
});
