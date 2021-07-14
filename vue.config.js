var path = require("path");
module.exports = {
  devServer: {
    compress: true,
    contentBase: path.resolve(__dirname, "dist"),
    open: true,
  },
};
