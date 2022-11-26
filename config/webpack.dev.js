const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //入口 entry
  entry: "./src/main.js",
  //输出 output
  output: {
    //文件输出路径
    path: undefined,
    //文件输出名称
    filename: "static/main.js",
  },
  //加载器 loader
  module: {
    rules: [
      //loader的规则
      {
        // 处理css/less文件
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader"],
      },
      {
        test: /\.less$/i,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        // 处理图片资源
        test: /\.(png|jpe?g|gif|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, //10kb
          },
        },
        generator: {
          filename: "./static/images/[hash:10][ext][query]",
        },
      },
      {
        // 处理字体文件
        test: /\.(ttf|woff|eot)$/,
        type: "asset",
        generator: {
          filename: "./static/fonts/[hash:10][ext][query]"
        }
      },
      {
        test: /\.(htm|html)$/i,
        use: ['html-withimg-loader']
      },
    ],
  },
  //插件 plugin
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
    }),
  ],
  devServer: {
    host: "localhost",
    open: true,
  },
  //模式 mode
  mode: "development",
}