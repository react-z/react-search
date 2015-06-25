var path = require('path');

module.exports = {
  context: __dirname,
  entry: {
    app: './app.js'
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'build'),
    devtool: '$@inline-source-map',
    libraryTarget: 'umd',
    publicPath: '../build/'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'       
      }
    ]
  }
};
