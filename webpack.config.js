const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')


const paths = {
  public: path.join(__dirname, '/public'),
  src: path.join(__dirname, '/src'),
  dest: path.join(__dirname, '/dist')
}

const common = {
  entry: [
    'babel-polyfill',
    path.join(paths.src, '/index.jsx')
  ],
  output: {
    filename: '[hash].bundle.js',
    path: paths.dest
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
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
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract(['css', 'postcss', 'sass'])
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/easy-css')
    ],
  },
  postcss: [
    autoprefixer({ browsers: ['last 2 versions', 'ie 9-11'] }),
  ],
  plugins: [
    new ExtractTextPlugin('[name].[hash].css'),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}

const development = {
  devServer: {
    historyApiFallback: true,
    inline: true,
    stats: 'errors-only',
  },
  devtool: 'source-map',
}

const production = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new CleanWebpackPlugin([paths.dest])
  ]
}

function config(environment) {
  switch (environment) {
    case 'build':
      return merge(common, production)
    case 'start':
      return merge(common, development)
    default:
      return common
  }
}

module.exports = config(process.env.npm_lifecycle_event)
