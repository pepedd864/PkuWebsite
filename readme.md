
1. 初始化 npm 
```
npm init -y
```
2. 执行下面命令
```
npm i webpack webpack-cli webpack-dev-server html-webpack-plugin css-loader  less-loader style-loader html-withimg-loader -D
```
3. 在package.json文件的script节点下添加
```
"dev": "webpack serve --config ./config/webpack.dev.js",
"build": "webpack --config ./config/webpack.prod.js"
```
