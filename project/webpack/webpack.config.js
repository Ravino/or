'use strict';

let NODE_ENV=process.env.NODE_ENV || "development";
//NODE_ENV="production";

const friendlyErrorsPlugin=require("friendly-errors-webpack-plugin");
const htmlPlugin=require("html-webpack-plugin");
const ExtractTextPlugin=require("extract-text-webpack-plugin");
const NotifierPlugin=require("webpack-notifier");
const webpack=require("webpack");
const path=require("path");
const Path=dir => path.join(__dirname, "./", dir);
const dirBuild="private";


module.exports = {

 entry: {
  build: ""
 },

 output: {
  filename: '[name].js',
  path: Path("frontend/" + dirBuild + "/finish"),
  publicPath: "/",
  library: '[name]'
 },

 resolve: {
  extensions: ['.vue', '.js', '.json'],
  alias: {
   'vue$': 'vue/dist/vue.esm.js'
  }
 },

 module:{
  rules: [{
   test: /\.vue$/,
   loader: "vue-loader",
   options: {
    loaders: {
     "css": ExtractTextPlugin.extract({
      "use": "css-loader",
      "fallback": "vue-style-loader"
     })
    }
   }
  },

  {
   test: /\.js$/,
   loader: "babel-loader",
   exclude: /node_modules/
  }
  ]
 },

 plugins: [
  new friendlyErrorsPlugin(),
  new ExtractTextPlugin("style.css"),
  new NotifierPlugin({ excludeWarnings: false, alwaysNotify: true}),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.DefinePlugin({
   NODE_ENV: JSON.stringify(NODE_ENV),
   LANG: JSON.stringify("ru")
  }),
  new webpack.optimize.CommonsChunkPlugin({
   name: "common"
  })
 ]
};



if(NODE_ENV=="production"){
 module.exports.entry.build=Path("frontend/"+dirBuild+"/start");
 module.exports.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
   compress: {
    warnings: false,
    drop_console: true,
    unsafe: true
   }
  }),
  new webpack.LoaderOptionsPlugin({
   minimize: true
  })
 );
}


else {
 module.exports.plugins.push(
  new htmlPlugin({ filename: "index.htm", template: "index.htm", inject: true }),
  new webpack.HotModuleReplacementPlugin()
 );

 module.exports.entry.build=[
  "webpack-dev-server/client?http://localhost:3000",
  "webpack/hot/dev-server",
  Path("frontend/" + dirBuild + "/start")
 ];

 module.exports.devtool = "source-map";
 module.exports.watch=true;
 module.exports.watchOptions= { aggregateTimeout: 100 };

 module.exports.devServer = {
  inline: true,
  historyApiFallback: false,
  host: "localhost",
  port: "3000",
  contentBase: "./",
  proxy: {
   path: /.*/,
   target: "https://localhost:3000"
  }
 };
}
