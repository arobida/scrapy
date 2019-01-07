#!/usr/bin/env node
const curl = require('curl');
const colors = require('colors');
const argv = require('yargs').argv;
const os = require("os")
const path = require('path')
const fs = require('fs');

const desk = path.join(os.homedir(), "Desktop");
const url = `${argv.c}`;
// 'http://royalentertainers.com/portfolio/with-text/five-columns-grid/'

const characters = async x => {
	const article = document.querySelectorAll('.mix');
};

const scrape = curl.get(url, function(err, response, body) {
	if (err) {
		console.log(colors.red("------------------------"));
		console.log(colors.yellow("No valid url please enter a valid url following the -c flag... \nSuch as:\nscrape -c https://google.com"));
		console.log(colors.green(err));
	} else {
		console.log(colors.green(response));
		fs.writeFile(`${desk}/index-${Date.now()}.html`, body, function(err) {
			if (err) return console.log(err);
			console.log(colors.magenta('Just made a html document!\nCheck your desktop?'));
		});
	}
});
