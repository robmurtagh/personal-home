const fs = require("fs");
const purify = require("purify-css");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Handlebars = require("handlebars");

const rawCss = ["src/css/style.css", "node_modules/tachyons/css/tachyons.min.css"].reduce((css, filePath) => css.concat(fs.readFileSync(filePath, "utf-8")), ""); // prettier-ignore
const rawHtml = fs.readFileSync("src/index.hbs", "utf-8");
const purifiedCss = rawCss; //purify(rawHtml, rawCss, { whitelist: ["canvas"], minify: true, info: true });

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "index.js",
    },
    devServer: {
        contentBase: __dirname + "/dist",
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.hbs",
            VARIABLE_CSS: new Handlebars.SafeString(purifiedCss),
        }),
        new CopyWebpackPlugin([{ from: "src/assets/*", to: "assets/[name].[ext]" }], {}),
    ],
    module: {
        rules: [
            {
                test: /\.hbs$/,
                use: ["handlebars-loader"],
            },
        ],
    },
    mode: "production",
};
