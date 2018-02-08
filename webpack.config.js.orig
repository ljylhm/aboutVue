var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
        index: "./src/index.js"
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/',
        filename: 'js/[name].js'
    },

    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|gif|svg|eot|woff|woff2|ttf)$/,
                loader:'file-loader'
            }
        ]
    },


    resolve: {
        //查找module的话从这里开始查找      
        //root: '', //绝对路径
        modules: ['./../', 'node_modules'],
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['.js', '.json', '.vue'],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            '@':path.resolve(__dirname, './src/js'),
            '@dir':path.resolve(__dirname,'./src/directive')
        }
    },

    devServer: {
        historyApiFallback: true,
        host: '10.101.70.49',
        port: 8086,
        noInfo: false
    }

}