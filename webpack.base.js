var webpack = require("webpack");
module.exports = {
  //Tell webapack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/, // /regExp/ the backward slash is escape the dot,
        loader: "babel-loader",
        exclude: /nodes_modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            ["env", { targets: { browsers: ["last 2 versions"] } }]
          ]
        }
      }
    ]
  },
  resolve: {
    extensions: [" ", ".js", ".jsx"]
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: "react"
    })
  ]
};
