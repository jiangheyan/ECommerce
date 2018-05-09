const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 8080,
        open: true,
        // hot: true,
        openPage: 'index.html'
    },
    entry: {
        index: [
        // 'webpack-dev-server/client?http://localhost:8080',
        // 'webpack/hot/only-dev-server',
        path.resolve(__dirname, 'src/index.js')
    ],
    vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            // test: /\.js[x]?$/,
            // loaders: ['react-hot-loader', 'babel-loader'],
            // // 'react-hot-loader/webpack', 'babel-loader?presets[]=react'
            // // loaders: ['react-hot-loader', 'babel-loader'],
            // exclude: path.resolve(__dirname, 'node_modules')
        },{
            test: /\.js[x]?$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['react']
                }
            }
        },{
            test:/\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'url-loader')
        },{
            test: /\.(scss|sass)$/,
            use: ['style-loader',
            {
                loader: 'css-loader',
                options: {
                    module: true,
                    localIdentName: '[name]-[local]_[hash:base64:6]'
                }
            },
            'sass-loader'],
            // loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'sass-loader')
        },{
            test: /\.(png|svg|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    //context: 'assets/images/',
                    //root: path.resolve(__dirname, 'src'),
                    outputPath: 'assets/images/'
                        //useRelativePath: true
                }
            }]
        },{
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/fonts/'
                }
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '',
            template: 'src/index.html',
            filename: './index.html',
        })
    ]
};

module.exports = config;