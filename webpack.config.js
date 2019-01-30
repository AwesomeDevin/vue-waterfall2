var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry:{ 
    app:'./src/main.js',
    vendor:['vue','vue-waterfall2']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: '[name]-[chunkhash:5].build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    contentBase:'./dist',
    historyApiFallback: true,
    // noInfo: true,
    // hot: true,
    inline:true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins:[
    new HtmlWebpackPlugin({
            filename:'index.html',
            template: __dirname + "/src/index.tmpl.html",//new 一个这个插件的实例，并传入相关的参数,
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common',
    //   minChunks: Infinity,
    // }),
    new webpack.optimize.CommonsChunkPlugin({
      name : 'manifest',
      minChunks: function(module) {
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, './node_modules')
          ) === 0
        )
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['vendor']
    })
    // new webpack.optimize.CommonsChunkPlugin({
    //   name : ['vendor'],
    //   filename: '[name]-[hash].min.js',
    //   chunks: ['vendor'],
    // }),
  ]
}

if (process.env.NODE_ENV === 'production') {
  // module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
