const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: './', // важно для GitHub Pages
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]', 
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: false,
    }),

    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],

  optimization: {
    splitChunks: false,      
    runtimeChunk: false,     
  },

  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3000,
    open: true,
  },

  mode: 'production', 
};
