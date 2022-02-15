const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "bundle[contenthash].js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /src\/css\/.*\.s[ac]ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /src\/assets\/images\/.*\.(img|gif|jpg|png)$/i,
        use: [
          {
            loader: "img-optimize-loader",
            options: {
              name: "[path][name].[ext]",
              compress: {
                mode: "high",
              },
            },
          },
        ],
      },
      {
        test: /src\/assets\/(audio|video)\/.*\.(mp3|mp4)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
    ],
  },
  devServer: {
    port: 3000,
  },
  plugins: [
    new HTMLPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "./css/style[contenthash].css",
    }),
    new CleanWebpackPlugin(),
  ],
};
