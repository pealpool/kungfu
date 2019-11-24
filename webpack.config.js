const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
    template:'./src/index.html',
    filename:'index.html'
})

module.exports = {
    mode: 'production', // development 或 production
    entry: path.join(__dirname,'./src/index.js'),
    output: {
        path: path.join(__dirname,'./dist'),
        filename: 'bundle.js'
    },
    plugins: [htmlPlugin],
    module:{
        rules:[
            // { test: /\.css$/, use: ['style-loader','css-loader','postcss-loader'] },
            // { test: /\.scss$/, use: ['style-loader','css-loader','sass-loader'] }
            {test: /\.scss$/,
                use: [
                    'style-loader',
                    {loader: 'css-loader',options: {importLoaders: 2}},  //2代表css-loader后还需要几个loader
                    {loader: 'postcss-loader',options:{plugins:[require("autoprefixer")("last 100 versions")]}},
                    'sass-loader'
                ]
            },
            {
              test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
                use: 'url-loader?limit=2048'
            },
            {
                test: /\.js$/, use: 'babel-loader', exclude: /node_modules/
            }
        ]
    }
};