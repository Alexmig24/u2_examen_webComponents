const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports={
    mode: 'development',
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ],
    },
    plugins:[new HtmlWebpackPlugin({
        template:'index.html',
    })],
}