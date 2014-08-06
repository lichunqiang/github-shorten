#!/usr/bin/env node

'use strict';

var shorten = require('./index');
var chalk = require('chalk');
var argv = require('minimist')(process.argv.slice(2), {
  alias: {
    'user': 'u',
    'repos': 'r'
  }
});
var pkg = require('./package.json');

function help() {
  console.log([
    '',
    chalk.grey(pkg.description),
    '',
    chalk.green('Usage'),
    '  $ github-shorten lichunqiang/local-nodeapi',
    '  $ github-shorten -u lichunqiang -r local-nodeapi',
    '',
  ].join('\n'));
}

if(argv.h || argv.help) {
  return help();
}

if(argv.v || argv.V || argv.version) {
  return console.log(chalk.green(pkg.version));
}

var user = argv.user;
var repos = argv.repos;

var reposUrl = argv._[0];
if(reposUrl) {
  var params = reposUrl.split('/');
  user = params[0];
  repos = params[1];
}
if(!user || !repos) {
  return help();
}
shorten(user, repos, function(err, shortUrl){
  printLn(shortUrl);
});

function printLn(str) {
  console.log(chalk.grey('-------------------------------'));
  console.log(chalk.cyan('    shorten: ') + chalk.green(str));
  console.log(chalk.grey('-------------------------------'));
}