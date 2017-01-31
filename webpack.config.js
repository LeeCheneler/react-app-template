const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    javascript: './src/index.jsx',
    html: './public/index.html',
  },
  output: {
    filename: '[hash].bundle.js',
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
        loader: 'html'
      },
    ]
  },
  "plugins": [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
