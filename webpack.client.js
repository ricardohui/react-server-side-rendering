const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const config = {
  //inform webpack that we are building a bundle for nodeJS, rather than for the browser};
  target: "web",
  // Tell webpack the root file of our server application
  entry: "./src/client/client.js",
  //tell webpack where to put the output file that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public") // use the node path module in runtime to create a build/bundle.js
  }
};

module.exports = merge(baseConfig, config);
