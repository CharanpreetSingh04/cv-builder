const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    output: {
        path: path.join(__dirname,'/dist'),
        filename: "index.bundle.js",
    },
    devServer: {
        port: 3005,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss|.css$/,
                use: [
                    miniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                loader: 'file-loader',
            }
        ]
    },
    plugins: [new miniCssExtractPlugin({
        filename: "./src/style.css",
      }),new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
};