const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
module.exports = merge(common, {
  devtool: "inline-source-map",
  mode: "development",
  devServer: {
    port: 8099,
    open: false,
    compress: true,
    hot: true,
    disableHostCheck: true,
    watchOptions: {
      ignored: /node_modules/
    },
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" }
      }
    }
  }
});
