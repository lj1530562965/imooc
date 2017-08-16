var htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
module.exports={
    entry: {
        main: path.resolve(__dirname, './src/script/main.js'),
        a: path.resolve(__dirname, './src/script/a.js'),
        b: path.resolve(__dirname, './src/script/b.js'),
        c: path.resolve(__dirname, './src/script/c.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename:'js/[name]-[chunkhash].js',
        publicPath: 'http://cdn.com/'
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'a.html',
            template: 'index.html',
            inject: false,
            title:'this is a.html',
            excludeChunks: ['b','c']
        }),
        new htmlWebpackPlugin({
            filename: 'b.html',
            template: 'index.html',
            inject: false,
            title:'this is b.html',
            excludeChunks: ['a','c']
        }),
        new htmlWebpackPlugin({
            filename: 'c.html',
            template: 'index.html',
            inject: false,
            title:'this is c.html',
            excludeChunks: ['a','b']
        })
    ]
}