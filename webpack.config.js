var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {javascript: "./app/main.js",
            html: "./app/index.html"
    },
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ],
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: /app/,
                loaders: ["babel-loader"]
            },
            {
                test: /\.html$/,
                include: /app/,
                loader: "file?name=[name].[ext]"
            },
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.less$/,
                include: /app/,
                loader: ExtractTextPlugin.extract('css?sourceMap!less?sourceMap')
            },
            {
                test: /\.json$/,
                include: /app/,
                loader: "json-loader"
            },
        ]
    }
};