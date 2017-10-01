import path from 'path'

import { WDS_PORT } from './src/webapp/js/shared/config'
import { isProd } from './src/webapp/js/shared/util'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'

export default {
    entry: [
        './src/webapp/js/index.js'
    ],
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: isProd ? '/static/' : `http://localhost:${WDS_PORT}/dist/`,
    },
    module: {
        rules: [
            // {
            //     enforce: "pre",
            //     test: /\.(js|jsx)$/,
            //     exclude: /node_modules/,
            //     loader: "eslint-loader",
            //     options: {
            //       // eslint options (if necessary)
            //     }
            // },
            { 
                test: /\.(js|jsx)$/, 
                use: 'babel-loader', 
                exclude: /node_modules/ 
            },
            { 
                test: /\.css$/, 
                use: [ 'style-loader', 'css-loader' ] 
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}  
                    }
                ]
            }
        ],
    },
    devtool: isProd ? false : 'source-map',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        port: WDS_PORT,
        hot: true,
        proxy: {
            '/rest/*': {
                target: 'http://localhost:8080',
                secure: false
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement',
            template: './src/webapp/pages/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}