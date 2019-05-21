const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './index.js',
    output: {
        filename: 'main.js',
    },
    devServer: {
        contentBase: './dist'
   },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};
