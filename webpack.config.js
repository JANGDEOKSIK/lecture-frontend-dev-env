const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
  },
  module: {
    rules: [    //rules라는 규칙 배열에 설정
      {
        test: /\.(jpg|png|gif|svg)$/,
        loader: "url-loader",
        options: {
          name: "[name].[ext]?[hash]",
          publicPath: "./dist/",
          limit: 2000 
        }
      },
      {
        test: /\.css$/,
        use:["style-loader", "css-loader"]
      }
    ]
  }
}

