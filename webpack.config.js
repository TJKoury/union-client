var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname,
    entry: {
      app: ["./_index.js"]
    },
    output: {
        path: __dirname,
        filename: "./index.js"
    },
    target:'web',
    devtool: "#inline-source-map",

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
       
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "url-loader?limit=10000&minetype=application/font-woff"
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "file-loader"
        }
     ],
     postLoaders: [ { loader: "transform?brfs" } ],
     plugins:[
       new webpack.ProvidePlugin({
         "$":"jquery",
         "jQuery":"jquery",
         "window.jQuery":"jquery"
       })
     ],
     resolve : {
        alias: {
          // bind version of jquery-ui
          "jquery-ui": "jquery-ui/jquery-ui.js",
          // bind to modules;
          modules: path.join(__dirname, "node_modules"),
       }
     }
   }
 }
