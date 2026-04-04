const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageJson = require('./package.json');

module.exports = (_, argv) => {
    const isProduction = (argv.mode || 'development') === 'production';
    const publicPath = isProduction ? new URL(packageJson.homepage).pathname : '/';

    return {
        mode: argv.mode || 'development',
        entry: './src/js/app.js',
        output: {
            filename: 'bundle.[contenthash].js',
            path: path.resolve(__dirname, 'dist'),
            clean: true,
            publicPath,
            assetModuleFilename: 'assets/[name][ext][query]',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: 'babel-loader',
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.(png|jpg|jpeg|gif|svg)$/i,
                    type: 'asset/resource',
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html',
            }),
        ],
        devServer: {
            static: path.join(__dirname, 'dist'),
            compress: true,
            port: 9000,
        },
    };
};
