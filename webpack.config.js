const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[name][ext]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Odin | To-Do List",
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
};
