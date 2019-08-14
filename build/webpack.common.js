const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const webpack = require("webpack");
module.exports = {
  context: path.resolve(__dirname, "../"),
  entry: {
    app: "./src/index.js"
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "@": path.resolve(__dirname, "../src")
    }
  },

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(js|vue)$/,
        loader: "eslint-loader",
        enforce: "pre",
        //指定检查的目录
        include: [path.resolve(__dirname, "src")],
        //eslint检查报告的格式规范
        options: {
          formatter: require("eslint-friendly-formatter")
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpe?g|gif||eot|woff|ttf|svg|pdf)$/,
        use: ["file-loader"]
      }
    ]
  },
  devtool: "inline-source-map",
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "webpack",
      template: path.resolve(__dirname, "../index.html")
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
