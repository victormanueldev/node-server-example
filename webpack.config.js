// Imports: Dependencies
const path = require('path');
// Webpack Configuration
const config = {
  
  // Entry
  entry: {path: './app.js'},
  // Output
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
  },
  // Loaders
  module: {
    rules : [
      // JavaScript/JSX Files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ]
  },
  optimization: {
    nodeEnv: false
  },
  // Plugins
  plugins: [],
  target: 'node',
  mode: 'production'
};
// Exports
module.exports = config;