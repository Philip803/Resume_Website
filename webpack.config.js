const path = require("path");
const LiveReloadPlugin = require("webpack-livereload-plugin");

module.exports = {
  entry: "./browser/App.jsx", // assumes your entry point is the index.js in the root of your project folder
  mode: "development",
  output: {
    path: path.join(__dirname, "public"), // assumes your bundle.js will also be in the root of your project folder
    filename: "bundle.js"
  },
  devtool: "source-maps",
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      // use the style-loader/css-loader combos for anything matching the .css extension
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new LiveReloadPlugin({
      appendScriptTag: true
    })
  ]
};
