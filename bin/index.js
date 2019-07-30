#! /usr/bin/env node

const yParser = require('yargs-parser');
const chalk = require('chalk');
const mkdirp = require('mkdirp');
const path = require('path');
const Generator = require('../lib/generators');

// 获取项目名称参数
const args = yParser(process.argv.slice(2));
const name = args._[0];

console.log(chalk.green('项目名为: %s'), chalk.bold(name));
console.log('开始创建...');

// 创建项目根目录
mkdirp.sync(name);
let cwd = process.cwd();
cwd = path.join(cwd, name);

const generator = new Generator({
  name,
  env: { cwd },
  resolved: require.resolve('../lib/generators'),
  args
});

generator.run(() => {
  console.log(chalk.green('创建成功!'));
});
