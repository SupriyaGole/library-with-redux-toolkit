const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {HotModuleReplacementPlugin} = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
  },
  devtool: "source-map",
  devServer: {
    port: 8000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.?css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ]
};
