/**
 * 执行终端命令相关的代码
 */
const { exec, spawn } = require('child_process');

// npm install 
const commandSpawn = (...args) => {
  return new Promise((resolve, reject) => {
    const childProcess = spawn(...args); //此进程中会有很多执行命令过程中打印信息，但是在当前进程看不见，我们可以传到当前进程中
    childProcess.stdout.pipe(process.stdout);//childProcess.stdout的输出流通过管道传入process表示当前进程的输出中
    childProcess.stderr.pipe(process.stderr);//err信息也拿过来
    childProcess.on("close", () => {
      resolve();
    })  //监听事件执行完毕
  })
}

// const commandExec = (...args) => {
//   return new Promise((resolve, reject) => {
//     const childProcess = spawn(...args);
//     childProcess.stdout.pipe(process.stdout);
//     childProcess.stderr.pipe(process.stderr);
//     childProcess.on("close", () => {
//       resolve();
//     })
//   })
// }

module.exports = {
  commandSpawn
}
