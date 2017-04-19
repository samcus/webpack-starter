const LiveReloadPlugin = require('webpack-livereload-plugin');
const webpack = require("webpack");

const env = (process.env.NODE_ENV);

getPlugins = () => {
    var plugins = [];
    plugins.push(new LiveReloadPlugin());
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
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    plugins: getPlugins()
}