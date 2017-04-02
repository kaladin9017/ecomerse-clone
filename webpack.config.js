module.exports = {
  entry: "./js/index.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader',
        query: { presets: ['react', 'es2015'] }
      }
    ]
  }
};
