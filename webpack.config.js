const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { type } = require('os');
module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: 'src/index.html'
        })
    ],
    module: {
        rules:[
            {
                test:/\.css$/i,
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
}