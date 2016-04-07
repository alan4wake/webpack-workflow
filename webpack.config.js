var webpack = require('webpack');
var bower_dir = __dirname + '/bower_components';

var config = {
  addVendor: function(name, path) {
    this.resolve.alias[name] = path;
    this.module.noParse.push(new RegExp('^' + name + '$'));
  },
  entry: {
    app: ['./app/main.js'],
    vendors: ['react', 'react-dom']
  },
  resolve: {
    alias: {}
  },
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ],
  module: {
    noParse: [],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  }
}

config.addVendor('react', bower_dir + '/react/react.min.js');
config.addVendor('react-dom', bower_dir + '/react/react-dom.min.js');
// config.addVendor('bootstrap', bower_dir + '/bootstrap/bootstrap.min.js');
// config.addVendor('bootstrap.css', bower_dir + '/bootstrap/bootstrap.min.css');

module.exports = config;