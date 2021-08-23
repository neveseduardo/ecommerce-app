const path = require('path');
const webpack = require('webpack');
module.exports = {
    lintOnSave: false,
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src'),
            }
        },
        plugins: [
            new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 6
            })
        ]
    },
    pwa: {
        name: 'ECOMMERCE_APP',
        themeColor: '#66615B',
        msTileColor: '#66615B',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: '#66615B'
    },
    css: {
        // Enable CSS source maps.
        sourceMap: process.env.NODE_ENV !== 'production'
    }
};
