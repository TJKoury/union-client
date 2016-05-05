// webpack.config.js

var webpack = require('webpack');
var path = require('path');
var libraryName = 'module';
var outputFile = libraryName + '.js';

var config = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  node:{global:false},
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
      
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader?presets[]=es2015'
        },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        },
        {
          test: /\.less$/,
          loader: "style!css!less"
        },
        {
          test: /\.png$/,
          loader: "url-loader?limit=100000"
        },
        {
          test: /\.jpg$/,
          loader: "file-loader"
        },
        { test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]' },
        { test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]' },
        { test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]' },
        { test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]' },
        { test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]' }
     ],
     postLoaders: [ { loader: "transform?brfs" } ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js'],
    modules: path.join(__dirname, "node_modules"),
  }
};

module.exports = config;