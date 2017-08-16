var htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
module.exports={
    entry: path.resolve(__dirname, './src/app.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename:'js/[name].bundle.js'
    },
    module: {
        loaders: [
            {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['latest']
            }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body'
        })
    ]
}