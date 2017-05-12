var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry : './app/index.js',
	module: {
		rules : []
	},
	output : {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js'
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:'./app/index.html'
		})
	]
}