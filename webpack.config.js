const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"] //It needs to be in inversed order. The loaders from the last of the list are first loaded and applied
            },
        ],
    },
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
};