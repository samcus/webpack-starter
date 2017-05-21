const webpack = require("webpack");
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackNotifierPlugin = require('webpack-notifier');

const env = (process.env.NODE_ENV);

getPlugins = () => {
    var plugins = [];
    plugins.push(new LiveReloadPlugin());
    plugins.push(new ExtractTextPlugin("resources/screen.css"));
    plugins.push(new WebpackNotifierPlugin({title: 'Webpack Starter', alwaysNotify: true}));
    return plugins;
}

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: __dirname,
        filename: 'resources/bundle.js'
    },
    module: {
        loaders: [
            { 
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','sass-loader']
                })
            },
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader",
                options: {
                    presets: ['env']
                }
            }
        ],
    },
    plugins: getPlugins()
}