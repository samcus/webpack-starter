const webpack = require("webpack");
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackNotifierPlugin = require('webpack-notifier');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const sassLintPlugin = require('sasslint-webpack-plugin');
//const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const env = (process.env.NODE_ENV);

getPlugins = () => {
    var plugins = [];
    //plugins.push(new WebpackCleanupPlugin({}));
    plugins.push(new LiveReloadPlugin());
    plugins.push(new WebpackNotifierPlugin({title: 'Webpack Starter', alwaysNotify: true}));
    //plugins.push(new CopyWebpackPlugin([{from: 'src/images/**/*', to: 'images'}]));
    plugins.push(new sassLintPlugin({
        glob: 'src/scss/**/*.scss',
        ignorePlugins: ['extract-text-webpack-plugin']
    }));
    plugins.push(new ExtractTextPlugin("screen.css"));
    if (process.env.NODE_ENV === 'production'){
        plugins.push(new UglifyJSPlugin());
    }
    return plugins;
}

module.exports = {
    entry: './src/js/app',
    output: {
        path: __dirname + '/resources',
        filename: 'bundle.js'
    },
    resolve:{
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            // {
            //     test: /\.ts$/,
            //     enforce: 'pre',
            //     loader: 'tslint-loader',
            //     options: { 
            //         failOnHint: false,
            //         configuration: {
            //             rules: {
            //                 quotemark: [true, 'single']
            //             }
            //         },
            //     }
            // },
            {
                test: /\.scss$/,
                //enforce: 'pre',
                //loader: 'css-loader',
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','sass-loader']
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: "file-loader?name=images/[name].[ext]"
            },
        ],
        loaders: [
            {
                test: /\.(png|jpg|gif)$/,
                loader: "file-loader?name=[name].[ext]"
            },
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
            },
            // { test: /\.tsx?$/, loader: 'ts-loader' }
        ],
    },
    plugins: getPlugins()
}