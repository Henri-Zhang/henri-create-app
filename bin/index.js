#! /usr/bin/env node

// const program = require('commander');
// const chalk = require('chalk');
const chalk = require('chalk');
const mkdirp = require('mkdirp');

// 获取项目名称参数
const name = process.argv[2];

console.log(chalk.green('项目名为: '), name);
console.log('开始创建...');

// 创建项目根目录
mkdirp.sync(name, err => {
  console.log(err);
});
