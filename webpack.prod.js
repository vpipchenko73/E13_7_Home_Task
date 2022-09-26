const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {

        //filename: 'main.js',
        filename: '[name].bundle.js',
        clean: true,
    },

    devServer: {
        static: {
            directory: path.join(__dirname, '/src/public'),
        },
        compress: true,
        historyApiFallback: true,
        compress: true,
        port: 8000,
        allowedHosts: ['auto',],
        //liveReload:true,
        //hot: true,
        //open:true,
        //watchFiles: ['src/*.css',],
    },

    plugins: [
           new HtmlWebpackPlugin({
        title: 'Production',
        template: path.resolve(__dirname, './src/public/index.html'),
        filename: 'index.html',
      }),
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin(),

    ],
    module: {
        rules: [
             /** CSS */
             {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
                // npm i style-loader css-loader -D
            },
        ],
    }
}