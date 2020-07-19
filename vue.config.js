const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: false,
  devServer: {
    port: 8080,
    open: true
  },
  // 设置alias
  chainWebpack: (config)=>{
    config.resolve.alias
        .set('@' , resolve('src'))
        .set('@$', resolve('src'))
        .set('assets',resolve('src/assets'))
        .set('components',resolve('src/components'))
        .set('layout',resolve('src/layout'))
        .set('views',resolve('src/views'))
        .set('static',resolve('src/static'))
  }
}
