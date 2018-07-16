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
// 	}
// };
// run >> webpack
// auto build
// >> webpack -w 
