

下载后 在项目目录下执行
- npm install
如果是windows系统，package.json如下：
"scripts": {
    "start": "set NODE_ENV=dev && webpack-dev-server --progress --colors",
    "mock": "node --harmony ./mock/server.js",
    "build": "rd/s/q build && set NODE_ENV=production && webpack --config ./webpack.production.config.js --progress --colors"
  },

  如果是linux系统，package.json如下：
   "scripts": {
    "start": "NODE_ENV=dev webpack-dev-server --progress --colors",
    "mock": "node --harmony ./mock/server.js",
    "build": "rm -rf ./build && NODE_ENV=production webpack --config ./webpack.production.config.js --progress --colors"
  }



  之后，npm start就自动打开浏览器
  npm run mock启动后端


  关于图片出现403问题，把图片链接一一复制到地址栏访问一下再刷新页面



  详细情况暂时还没有时间写