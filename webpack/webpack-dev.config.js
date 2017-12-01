let path = require('path')
let webpack = require('webpack')
let HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src/main.js'
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
    ],
    module: {
        loaders: [
            {
                exclude: /node_modules/
            },
            {
                test: /\.(jsx|js|es6)$/,
                loader: 'babel-loader',
                include: /src/,
                query: {
                    presets: ['react']
                }
            },
            {
                test: /\.(styl|css)$/,
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url',
                query: {
                    limit: 1000,
                    name: 'images/[name].[ext]'
                }
            }
        ]
    }
}