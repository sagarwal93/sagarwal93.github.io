var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  module: {
    preLoaders: [{
      test: /(\.js$|\.jsx$)/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }],
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    },
    {
      test: /\.css$$/,
      loader: 'style!css'
    },
    {
      test: /\.(png|jpg)$/,
      loader: 'url'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './',
    hot: true,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
