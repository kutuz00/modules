const { resolve } = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const MiniExtractPlagin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry: "./app/index.js",
  mode: "development",
  output: {
    filename: "main.[contenthash].js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpeg|gif|mp3|wav)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
      {
        test: /\.css$/i,
        use: [MiniExtractPlagin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniExtractPlagin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlPlugin({ template: resolve(__dirname, "index.html") }),
    new MiniExtractPlagin({
      filename: "[name].css",
    }),
    new BundleAnalyzerPlugin(),
  ],
  devServer: {
    port: 3000,
  },
};
