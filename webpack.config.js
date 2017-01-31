import path from 'path'

module.exports = {
  entry: {
    javascript: './index.js',
    html: './public/index.html',
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader']
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  }
}
