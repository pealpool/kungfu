const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // development 或 production
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    // 配置本地服务器
    devServer: {
        historyApiFallback:{
            index: 'index.html',
            contentBase: path.join(__dirname, 'dist'),
        },
        compress: true, // 是否压缩
        port: 9000, // 服务器的端口
        host: "localhost", // 主机
        open: true,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css|.scss$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: {importLoaders: 2}},  //2代表css-loader后还需要几个loader
                    {
                        loader: 'postcss-loader', options: {
                            postcssOptions: {plugins: [require("autoprefixer")("last 100 versions")]},
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test:/\.(jpg|png|gif|bmp|svg)$/,
                type:"asset",
                //解析
                parser: {
                    //转base64的条件
                    dataUrlCondition: {
                        maxSize: 20 * 1024, // 20kb
                    }
                },
                generator:{
                    //与output.assetModuleFilename是相同的,这个写法引入的时候也会添加好这个路径
                    filename:'[name].[hash:6][ext]',
                    //打包后对资源的引入，文件命名已经有/img了
                    publicPath:'./'
                },
            },
            {
                test: /\.js$/, use: 'babel-loader', exclude: /node_modules/
            }
        ]
    },
};