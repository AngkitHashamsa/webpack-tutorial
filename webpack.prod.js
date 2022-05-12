const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  entry: "./src/index.js",
  plugins: [new CleanWebpackPlugin()],

  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
});
