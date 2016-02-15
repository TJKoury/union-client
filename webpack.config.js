module.exports = {
    context: __dirname,
    entry: "./_index.js",
    output: {
        path: __dirname,
        filename: "index.js"
    },
    module: {
     // `loaders` is an array of loaders to use.
     // here we are only configuring vue-loader
     loaders: [
       {
         test: /\.vue$/, // a regex for matching all files that end in `.vue`
         loader: 'vue'   // loader to use for matched files
       }
     ]
   }
}
