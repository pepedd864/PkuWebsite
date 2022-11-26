# Web开发第五次作业-高校网站模仿
- 此项目选取北京大学官网首页进行模仿
- 项目在完成度上完成了网站的大部分功能(响应式布局部分未完成，部分轮播图未完成)
- 项目使用webpack 5进行项目开发，打包，代码部分则是基本的HTML和CSS代码，并有少量js代码(jQuery库)作为网站部分动效的实现
# 调试代码
- 初次调试本项目，可以直接使用dist目录下打包好的文件预览
- 也可以简单配置node环境后使用
# 配置环境

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
