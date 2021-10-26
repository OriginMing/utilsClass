#!/usr/bin/env node
const { Command } = require('commander');
const program = new Command();
const helpOptions = require('./lib/core/help');
const createCommands = require('./lib/core/create');
program.version(require('./package.json').version);
//通过npm link 将bin 和环境变量连接
//每个选项可以定义一个短选项名称（-后面接单个字符）和一个长选项名称（--后面接一个或多个单词），使用逗号、空格或|分隔。

/* program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza')
  .option('-n, --number <numbers>', 'specify numbers')
  .option('-l, --letter [letters...]', 'specify letters');
  

program.parse(process.argv);
console.log('Options: ', program.opts().number);
console.log('Remaining arguments: ', program.args); */

// 帮助和可选信息
helpOptions(program);

// 创建其他指令
createCommands(program);

//数据测试
program.parse(process.argv);