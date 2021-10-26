
const {
  createProjectAction,
  addComponentAction,
  addPageAndRouteAction,
  addStoreAction
} = require('./actions');

const createCommands = (program) => {
  program
    .command('create <project> [others...]')
    .description('clone a repository into a folder')
    .action((project)=>createProjectAction(project));

  program
    .command('addcpn <name>')
    .description('add vue component, 例如: wm addcpn HelloWorld [-d src/components]')
    .action((name) => {
      addComponentAction(name, program.opts().dest || 'src/components');
    });
  
  program
    .command('addpage <page>')
    .description('add vue page and router config, 例如: wm addpage Home [-d src/pages]')
    .action((page) => {
      addPageAndRouteAction(page, program.opts().dest || 'src/pages')
    })

  program
  .command('addstore <store>')
  .description('add vue page and router config, 例如 wm addpage Home [-d src/pages]')
  .action((store) => {
    addStoreAction(store, program.opts().dest || 'src/store/modules')
  })
}


module.exports = createCommands;
