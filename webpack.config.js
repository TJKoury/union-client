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

    module: {
     // `loaders` is an array of loaders to use.
     // here we are only configuring vue-loader
     loaders: [
       {
         test: /\.vue$/, // a regex for matching all files that end in `.vue`
         loader: 'vue'   // loader to use for matched files
       },
       { test: /\.css$/, loader: "style-loader!css-loader" },
       { test: /\.png$/, loader: "url-loader?limit=100000" },
       { test: /\.jpg$/, loader: "file-loader" },
       { test: /\.js$/, loader: "transform?brfs" }
     ]
   }
}
