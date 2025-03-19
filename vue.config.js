const { default: config } = require("config/config");
const HtmlWebpackPlugin = require("html-webpack-plugin");

if (isProd) {
    config
        .plugin("html")
        .use(HtmlWebpackPlugin)
        .tap((args) => {
            args.cdn = assetsCDN.assets;
            return args;
        });
}

module.exports = {
    css: {
        loaderOptions: {
            less: { javascriptEnabled: true }
        }
    }
}