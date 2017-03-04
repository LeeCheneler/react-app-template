const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// Best to use path.join and the variable '__dirname' to ensure
// compatible paths across all file systems (windows/mac/linux)
const paths = {
  public: path.join(__dirname, '/public'),
  src: path.join(__dirname, '/src'),
  dest: path.join(__dirname, '/dist')
}

// Common webpack config that is always applied
const common = {
  // Use babel with polyfill built in build the app from the root javascript file
  entry: [
    'babel-polyfill',
    path.join(paths.src, '/index.jsx')
  ],
  // Output the built apps javascript and adds a hash to the file name for cache busting
  output: {
    filename: '[hash].bundle.js',
    path: paths.dest,
    publicPath: '/'
  },
  // Automatically resolve these exentions (means you can import them extensionless)
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.jsx', '.scss']
  },
  // Specify module loading rules, how various file types are imported via ES6/7 import
  module: {
    rules: [
      // Use babel-loader for .js or .jsx files
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      // Use html-loader for .html files
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        // Load .scss and .css files through the following loaders:
          // - sass-loader (compiles sass to css)
          // - postcss-loader (applies autoprefixer plugin to css)
          // - css-loader
          // - loads css as plain text
        // Then the ExtractTextPlugin swallows the output and injects it as a css
        // file on the web page
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
      // Use file-loader to load images, adds a hash to the file name for cache busting
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=[name].[hash].[ext]'
      }
    ]
  },
  plugins: [
    // Configre ExtractTextPlugin so it adds the hash of the css file to its file
    // name for cache busting
    new ExtractTextPlugin('[name].[hash].css'),
    // Specify template location for web apps root html
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new BundleAnalyzerPlugin()
  ]
}

// Development webpack config applied during 'npm start'
const development = {
  devServer: {
    historyApiFallback: true,
    inline: true,
    stats: 'errors-only',
  },
  devtool: 'source-map',
}

// Prouction webpack config applied during 'npm run build'
const production = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    // Minify javascript
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    // clean dist directory before new build
    new CleanWebpackPlugin([paths.dest])
  ]
}

// Merge configs based on environment
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

// Use npm_lifecycle_event to determine environment, this is script context specific
module.exports = config(process.env.npm_lifecycle_event)
