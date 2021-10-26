const helpOptions = (program) => {
  // 增加自己的options
  program.option('-w --wm', 'a define cli');
  program.option('-d --dest <dest>', 'a destination folder, 例如: -d /src/components')
  program.option('-f --framework <framework>', 'your frameword')

}

module.exports = helpOptions;

// 1.Buffer
// 2.理论: 事件循环(浏览器/Node)
