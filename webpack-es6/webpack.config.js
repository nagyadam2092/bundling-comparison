var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'bundle.min.js'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: '> 0.25%, not dead',
                                    modules: false
                                }
                            ]
                        ]
                        // plugins: [require('@babel/plugin-proposal-object-rest-spread')]
                    }
                }
            }
        ]
    },
    stats: 'verbose'
};
