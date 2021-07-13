var path = require("path");
module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true, //是否为每个静态文件开启gzip压缩：
    port: 8080, //项目运行的端口
    open: true, //是否在运行项目时，默认打开浏览器
  },
};
