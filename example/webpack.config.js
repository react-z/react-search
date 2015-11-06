module.exports = {
  devtool: 'source-map',
  context: __dirname,
  entry: { app: './example.js' },
  output: {
    filename: './example/public/bundle.js',
    publicPath: 'public'
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
}
