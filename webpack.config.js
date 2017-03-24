var path = require('path')
var webpack = require('webpack')
module.exports = {
  entry: getEntry(),
  output: {
    path: path.resolve(__dirname, './vue_static/dist' + process.env.NODE_TAR),
    publicPath: '/vue_static/dist' + process.env.NODE_TAR + '/',
    filename: 'build.js'
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  externals: {
    'reqwest': 'reqwest'
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}

// 根据相应环境选择对应的入口
function getEntry() {
  switch (process.env.NODE_ENV) {
    case "dev":
      return './src/entry/entry_dev.js';
    case "dev:test":
      return './src/entry/entry_dev:test.js';
    case "test":
      return './src/entry/entry_test.js';
    case "prod":
      return './src/entry/entry_prod.js';
    case "devpc":
      return './src/entry/entry_devpc.js';
    case "testpc":
      return './src/entry/entry_testpc.js';
    case "testpc-novue":
      return './src/entry/entry_testpc_novue.js';
    case "prodpc":
      return './src/entry/entry_prodpc.js';
    case "prodpc-novue":
      return './src/entry/entry_prodpc_novue.js';
  }
}


if (process.env.NODE_ENV === 'test') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"test"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ])
}
if (process.env.NODE_ENV === 'prod') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"prod"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ])
}