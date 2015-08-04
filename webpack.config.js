var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {javascript: "./app/main.js",
            html: "./app/index.html",
    },
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
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
            }
        ]
    }
};