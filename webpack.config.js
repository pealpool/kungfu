
const path = require("path");
module.exports = {
    entry: {
        index: "./index.js" ,
        other: "./other.js" //
        //入口文件，若不配置webpack4将自动查找src目录下的index.js文件
    },
    output: {
        filename: "[name].bundle.js",//输出文件名，[name]表示入口文件js名
        path: path.join(__dirname, "dist")//输出文件路径
    },
    mode: "development"
};