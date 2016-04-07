var bower_dir = __dirname + '/bower_components';
module.exports = {
  entry: ['./app/main.js'],
  resolve: {
    alias: {
      'react': bower_dir + '/react/react.min.js',
      'react-dom': bower_dir + '/react/react-dom.min.js'
    }
  },
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    noParse: [bower_dir + '/react/react.min.js', bower_dir + '/react/react-dom.min.js'],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  }
};