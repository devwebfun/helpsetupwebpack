var webpack = require('webpack');

var config = {
  context: __dirname + '/src', // `__dirname` is root of project and `src` is source
  entry: {
    app: './app.js',
  },
  output: {
    path: __dirname + '/dist', // `dist` is the destination
    filename: 'bundle.js',
  },
};

module.exports = config;
// run >> webpack -p


//or
// module.exports = {
// 	entry: './src/app.js',
// 	output: {
// 		path: __dirname,
// 		filename: './dist/bundle.js'
// 	},

//>>npm install babel-core  babel-loader babel-preset-es2015 babel-preset-react --save-dev
//re install 
//>>npm install webpack --save
//change app.js to app.jsx
//jsx to js
// 	module: {
// 		rules: [
// 			{
// 				test: /\.jsx$/,
// 				enforce: "pre",
// 				exclude:  /node_modules/,
// 			    loader: 'babel-loader',
// 				options: {
// 					presets: ['react','es2015']
// 				},
// 			}
// 		]
// 	}

// };
// run >> webpack
// auto build
// >> webpack -w 
