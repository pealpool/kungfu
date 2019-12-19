const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development', // development 或 production
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        // new HtmlWebpackPlugin({
        //     template: './src/setSixData.html',
        //     filename: 'setSixData.html'
        // }),
        new HtmlWebpackPlugin({
            template: './src/selectSchool.html',
            filename: 'selectSchool.html'
        }),
    ],
    module: {
        rules: [
            // { test: /\.css$/, use: ['style-loader','css-loader','postcss-loader'] },
            // { test: /\.scss$/, use: ['style-loader','css-loader','sass-loader'] }
            {
                test: /\.css|.scss$/,
                use: [
                    'style-loader',
                    {loader: 'css-loader', options: {importLoaders: 2}},  //2代表css-loader后还需要几个loader
                    {loader: 'postcss-loader', options: {plugins: [require("autoprefixer")("last 100 versions")]}},
                    'sass-loader'
                ]
            },
            {
                test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
                // use: 'url-loader?limit=100000',
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1024 * 10,
                        name: 'img/[name].[hash].[ext]',
                        publichPath: './'
                    }
                }
            },
            {
                test: /\.js$/, use: 'babel-loader', exclude: /node_modules/
            }
        ]
    },
};