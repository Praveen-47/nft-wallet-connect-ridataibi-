const webpack = require('webpack');
const path = require('path');

const config = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      
    ],
    resolve: {
        fallback: {
        //   assert: require.resolve('assert'),
          stream: require.resolve('stream-browserify'),
          crypto: require.resolve('crypto-browserify'),
          
        }}
    
  },
  devServer: {
    'static': {
      directory: './dist'
    }
  }
};

module.exports = config;
