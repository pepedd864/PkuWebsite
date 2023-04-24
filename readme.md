<h1 align="center">北京大学首页模仿</h1>

## 项目介绍
- 此项目选取北京大学官网首页进行模仿
- 项目在完成度上完成了网站的大部分功能(响应式布局部分未完成，部分轮播图未完成，主页轮播图使用`slick.js`触摸轮播图插件)
- 项目使用`webpack 5`进行项目开发，打包，代码部分则是基本的`HTML`和`CSS`代码，并有少量js代码(`jQuery`库)作为网站部分动效的实现
![](https://raw.githubusercontent.com/pepedd864/cdn-repos/main/img/67ca64e7c090b7467cf74d13af90b90d.gif)

## 调试代码
- 初次调试本项目，可以直接使用dist目录下打包好的文件预览
- 也可以简单配置`node`环境后使用
## 配置环境

1. 执行下面命令安装依赖
```
npm install
```
2. 运行项目
```
npm run dev
```
3. 打包项目
```
npm run build
```
## 项目结构
```
|-- config          # webpack配置文件
|-- dist            # 打包后的文件
|   `-- static
|       |-- fonts
|       `-- images
|-- public          # 公共文件
`-- src             # 源码
    |-- fonts       # 字体文件
    |-- images      # 图片文件
    |   |-- block
    |   |-- btn
    |   |-- float
    |   |-- footer
    |   |-- nav_child
    |   `-- slick
    |-- js          # js文件
    `-- less        # less文件
```

## 项目展示

| ![](https://raw.githubusercontent.com/pepedd864/cdn-repos/main/img/bff12feada8377b13173d54943747896.png) | ![](https://raw.githubusercontent.com/pepedd864/cdn-repos/main/img/e5a4e4d0c2312125f550d3a6f8f74a16.png) |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://raw.githubusercontent.com/pepedd864/cdn-repos/main/img/4bc75600e71506e5ab9a6241f8492df5.png) | ![](https://raw.githubusercontent.com/pepedd864/cdn-repos/main/img/5e62437fdad937d1471f466e7ca9eff5.png) |
| ![](https://raw.githubusercontent.com/pepedd864/cdn-repos/main/img/b3cae15031438a3fd120b5bff192fba5.png) | ![](https://raw.githubusercontent.com/pepedd864/cdn-repos/main/img/d76770bd63fa99bdfb68deaa3676c03b.png) |
| ![](https://raw.githubusercontent.com/pepedd864/cdn-repos/main/img/f8da61c9571190b3059e8c06d28ec65a.png) | ![](https://raw.githubusercontent.com/pepedd864/cdn-repos/main/img/d0f3c63b4a95405d45648b5ebe3a2df4.png) |

