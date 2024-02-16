const path = require('path');
const webpack = require('webpack');
module.exports = {
  // Specify the entry point of your application
  entry: './src/App.js',
  
  // Specify the output file containing the bundled code
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  
  // Add resolve.fallback to include polyfills for node.js core modules
  resolve: {
    fallback: {
      "crypto": require.resolve("crypto-browserify"),
      "fs": false,
      "http": require.resolve("stream-http"),
      "net": false,
      "querystring": require.resolve("querystring-es3"),
      "zlib": require.resolve("browserify-zlib")
    }
  },
  
  // Define rules to handle different file types
  module: {
    rules: [
      // JavaScript/JSX files
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      // CSS files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  
  // Specify optimization options if needed
  // optimization: { ... },
  
  // Specify any plugins you may need
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
  
  // Other options
  // ...
};
