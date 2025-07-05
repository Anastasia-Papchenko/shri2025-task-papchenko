const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/index.jsx')
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',         
    publicPath: './',                           
    assetModuleFilename: 'assets/[name].[hash][ext]'
  },

  resolve: {
    extensions: ['.js', '.jsx'],                   
    alias: {
      assets: path.resolve(__dirname, 'src/assets')  
    }
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'                       
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,              
          {
            loader: 'css-loader',
            options: { url: true }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource'                     
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),                       
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'         
    })
  ],

  optimization: {
    splitChunks: {
      chunks: 'all'                                
    },
    runtimeChunk: 'single'                        
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    port: 3000,
    open: true,
    hot: true
  },

  mode: 'production',
  devtool: 'source-map'                            
};
