const path = require('path');

module.exports = {  
  mode: 'production',
  devtool: 'eval-source-map',
  entry: {
    index: './src/app.ts', 
  },
  output: {
    publicPath: 'public',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },  
  module: {    
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')]
      }
    ]
  },
  resolve: {    
    extensions: ['.ts']
  },  
}