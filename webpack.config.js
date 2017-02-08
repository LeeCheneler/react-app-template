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
    extensions: ['.js', '.jsx', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  autoprefixer({
                    browsers: ['last 2 versions', 'ie 9-11']
                  })
                ]
              }
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [
                  path.resolve(__dirname, './node_modules/easy-css')
                ]
              }
            }
          ]
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=[name].[hash].[ext]'
      }
    ]
  },
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
