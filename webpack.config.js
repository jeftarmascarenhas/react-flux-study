var path = require('path');

module.exports = {
  entry: {
    app: ['./app/App.js']
  },

  output: {
    path: path.join(__dirname, "public"),
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    watchContentBase: true,
    port: 9000,
    noInfo: true,
    overlay:{
      warnings: true,
      errors: true
    }
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }

}
