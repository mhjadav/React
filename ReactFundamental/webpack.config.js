var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry : './app/index.js',
	output : {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.min.js'
	},
	module: {
		rules : [
			{test : /\.(js)$/, use: 'babel-loader'},
			{test : /\.(css)$/, use: ['style-loader', 'css-loader']}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:'./app/index.html'
		})
	]
}


/*
entry
loader
output

babel is code transformer 
env transform js into latest version of js
react convert jsx code
css loader take any css file and find import or url and change those to require statement
style loader takes css and insert into page

*/