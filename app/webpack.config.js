const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const OfflinePlugin = require('offline-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

// Best to use path.join and the variable '__dirname' to ensure
// compatible paths across all file systems (windows/mac/linux)
const paths = {
  public: path.join(__dirname, '/public'),
  src: path.join(__dirname, '/src'),
  dest: path.join(__dirname, '/dist')
}

// Common webpack config that is always applied
const common = {
  entry: {
    app: path.join(paths.src, '/index.jsx')
  },
  // Output the built apps javascript and adds a chunkhash to the file name for cache busting
  output: {
    filename: '[name].[chunkhash].js',
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
        use: 'babel-loader'
      },
      {
        test: /\.bundle.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'bundle-loader',
            options: {
              lazy: true
            }
          },
          {
            loader: 'babel-loader'
          }
        ]
      },
      // Use html-loader for .html files
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: 'html-loader'
      },
      {
        test: /\.md$/,
        use: 'raw-loader'
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
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [
                  path.resolve(__dirname, './node_modules/@pluto-css/foundation')
                ]
              }
            }
          ]
        })
      },
      // Use file-loader to load images, adds a chunkhash to the file name for cache busting
      {
        test: /\.(jpe?g|png|gif)$/i,
        exclude: /node_modules/,
        loader: 'file-loader?name=[name].[hash].[ext]'
      },
      // Load svgs in, provides an imported object with an id property
      // (can be used easily by providng the object to the provided SVGIcon component)
      {
        test: /\.svg$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'svg-sprite-loader',
          },
          {
            loader: 'img-loader',
            options: {
              minimize: true,
              svgo: {
                plugins: [
                  { removeTitle: true },
                  { convertColors: { shorthex: false } },
                  { convertPathData: false }
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        exclude: /node_modules/,
        loader: 'file-loader?name=public/fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    // Configure ExtractTextPlugin so it adds the chunkhash of the css file to its file
    // name for cache busting
    new ExtractTextPlugin('[name].[chunkhash].css'),
    // Specify template location for web apps root html
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    // Series of copies into build directory for service worker support and favicon
    new CopyWebpackPlugin([
      {
        from: './public/images/touch',
        to: 'images/touch'
      },
      {
        from: './public/manifest.json',
        to: ''
      },
      {
        from: './public/favicon.ico',
        to: ''
      }
    ]),
    // This produces service worker files required for very basic offline support
    // For a more detailed but still basic SPA config see here:
    // https://github.com/NekR/offline-plugin/blob/master/docs/examples/SPA.md
    new OfflinePlugin({
      publicPath: '/',
      externals: [
        '/'
      ],
      ServiceWorker: {
        navigateFallbackURL: '/'
      }
    })
  ]
}

// Development webpack config applied during 'npm start'
const development = {
  devServer: {
    historyApiFallback: true,
    inline: true,
    stats: 'errors-only'
  },
  devtool: 'source-map'
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
      },
      sourceMap: true
    }),
    // clean dist directory before new build
    new CleanWebpackPlugin([paths.dest])
  ],
  devtool: 'source-map'
}

const stats = {
  plugins: [
    // clean dist directory before new stats build
    new CleanWebpackPlugin([paths.dest]),
    new BundleAnalyzerPlugin({
      statsFilename: 'stats.json'
    })
  ]
}

// Merge configs based on environment
function config(environment) {
  switch (environment) {
    case 'build':
      console.log('*** Running production build ***')
      return merge(common, production)
    case 'start':
      console.log('*** Running development build ***')
      return merge(common, development)
    case 'stats':
      console.log('*** Running production stats build ***')
      return merge(common, production, stats)
    default:
      return common
  }
}

// Use npm_lifecycle_event to determine environment, this is script context specific
module.exports = config(process.env.npm_lifecycle_event)
