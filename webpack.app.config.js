const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

const env = require('./config/env');
const common = require('./config/common');

const CONFIG = merge([
    common,
    {
        entry: {
            'app': [path.join(env.paths.src, 'index.ts')]
        },
        output: {
            publicPath: '/',
            path: env.paths.dist,
            library: '[name]',
            filename: 'js/[name].[hash:8].js'
        },
        devServer: {
            contentBase: './dist',
            port: 9001,
            hot: true,
            historyApiFallback: true,
            stats: {
                modules: false
            }
        },
        plugins: [
            new webpack.DllReferencePlugin({
                manifest: env.paths.dll.vendor
            }),
            new HtmlWebpackPlugin({
                inject: true,
                template: path.join(env.paths.src, 'index.html')
            }),
            new AddAssetHtmlPlugin([
                {
                    filepath: path.join(env.paths.dist, 'js/vendor.*.js')
                },
                {
                    filepath: path.join(env.paths.dist, 'css/vendor.*.css'),
                    typeOfAsset: 'css'
                }
            ]),
            new ManifestPlugin({
                fileName: env.filenames.manifests.app
            }),
            new webpack.DefinePlugin({
                'AppConfig': JSON.stringify(require('./config.json')[process.env.NODE_ENV])
            }),
            new webpack.HotModuleReplacementPlugin()
        ]
    }
]);

module.exports = CONFIG;