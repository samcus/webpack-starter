const webpack = require("webpack");
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackNotifierPlugin = require('webpack-notifier');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const sassLintPlugin = require('sasslint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const env = (process.env.NODE_ENV);

getPlugins = () => {
    var plugins = [];
    plugins.push(new LiveReloadPlugin());
    plugins.push(new ExtractTextPlugin("resources/screen.css"));
    plugins.push(new WebpackNotifierPlugin({title: 'Webpack Starter', alwaysNotify: true}));
    plugins.push(new CopyWebpackPlugin([{from: 'src/images', to: 'resources/images'}]));
    plugins.push(new sassLintPlugin({
        glob: 'src/scss/**/*.scss',
        ignorePlugins: ['extract-text-webpack-plugin']
    }));
    if (process.env.NODE_ENV === 'production'){
        plugins.push(new UglifyJSPlugin());
    }
    return plugins;
}

module.exports = {
    entry: './src/ts/app',
    output: {
        path: __dirname,
        filename: 'resources/bundle.js'
    },
    resolve:{
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                //exclude: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
                //exclude: /\.scss$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: { 
                    failOnHint: false,
                    configuration: {
                        rules: {
                            quotemark: [true, 'single']
                        }
                    },
                }
            },
            {
                test: /\.scss$/,
                enforce: 'pre',
                loader: 'css-loader',
            },
        ],
        loaders: [
            { 
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','sass-loader']
                })
            },
            // { 
            //     test: /\.js$/, 
            //     exclude: /node_modules/, 
            //     loader: "babel-loader",
            //     options: {
            //         presets: ['env']
            //     }
            // },
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ],
    },
    plugins: getPlugins()
}