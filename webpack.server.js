const path = require("path");

const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
  //inform webpack that we are building a bundle for nodeJS, rather than for the browser};
  target: "node",
  // Tell webpack the root file of our server application
  entry: "./src/index.js",
  //tell webpack where to put the output file that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build") // use the node path module in runtime to create a build/bundle.js
  },

  externals: [webpackNodeExternals()] //webpack-node-externals speeds up the webpack process
};

module.exports = merge(baseConfig, config);
