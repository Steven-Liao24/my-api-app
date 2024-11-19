const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.jsx', // 应用程序入口
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader', // 转译 JSX 和现代 JS
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], // 处理 CSS 文件
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // 支持的文件扩展名
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // 使用你的 HTML 模板
        }),
    ],
    devServer: {
        static: './dist',
        port: 3000, // 启动服务器的端口
    },
    mode: 'development', // 开发模式
};
