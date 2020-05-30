const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDevelopment = true;

module.exports = {
  entry: "./index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "public/dist")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: ["babel-loader"]
      },
      {
        test: /\.s(a|c)ss$/,
        loader: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: isDevelopment
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDevelopment ? "[name].css" : "[name].[hash].css",
      chunkFilename: isDevelopment ? "[id].css" : "[id].[hash].css"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx", ".scss"],
    alias: {
      Modules: path.resolve(__dirname, "modules/"),
      Pages: path.resolve(__dirname, "pages/"),
      Misc: path.resolve(__dirname, "misc/")
    }
  }
};
