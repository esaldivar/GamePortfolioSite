/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname,'./src/index.js'),
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	devtool: 'inline-source-map',
	output: {
		path: path.resolve(__dirname,'./build'),
		filename: 'bundle.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname,'./public/index.html'),
		}),
	],
	module: {
		rules: [
		  {
			test: /\.(png|jpe?g|gif)$/i,
			use: [
			  {
				loader: 'file-loader',
			  },
			],
		  },
		],
	  },
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		  },
		  compress: true,
		  port: 9000,
	  },
};