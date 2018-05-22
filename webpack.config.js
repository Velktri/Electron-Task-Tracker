var path = require('path')
var webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    mode: 'development',

    entry: './frontend/index.js',
    
    output: {
        path: path.resolve(__dirname, './static'),
        filename: 'build.js'
    },

    resolve: {
        extensions: ['.js', '.vue', '.css', '.json', '.styl'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('.'),
        }
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            { 
                test: /\.css$/, 
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                ],
            },
        ]
    },

    plugins: [
        new webpack.ExternalsPlugin('commonjs', [
            'electron'
        ]),

        new VueLoaderPlugin()
    ]
}