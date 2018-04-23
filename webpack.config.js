const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const isDev = process.env.NODE_ENV ==='development'

const config = {
    target:'web',
    entry: path.join(__dirname,'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname,'dist')
    },
    module: {
        rules:[
            {
                test:/.vue$/,
                loader:'vue-loader'
            },
            {
                test:/.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.styl/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test:/\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: '[name]-aaa.[ext]'
                        }

                    }
                ]
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"devlopment"' : '"production"'
            }
        }),
        new HTMLPlugin()
    ]
}

if (isDev){
    config.devtool = '#cheap-module-eval-source-map'
    config.devServer = {
        port: 5088,
        host: '192.168.0.49',
        overlay: {
            errors:true,
        },
        // historyFallback: {

        // },
        open: true,
        hot: true
        
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}

module.exports = config