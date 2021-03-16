const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname,'src','index.tsx'),
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js', 
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        hot: true,
        historyApiFallback: true,
    },
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
    ].filter(Boolean),
    module: {
        rules: [
            {
                test: /\.(j|t)sx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader' ,
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    } 
                },
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                      loader: 'file-loader',
                    },
                  ],
            },
            {
                test: /\.svg$/,
                    use: [
                        {
                         loader: 'svg-url-loader',
                         options: {
                         limit: 10000,
                         },
                        },
                    ],
            }
        ],
    }
};