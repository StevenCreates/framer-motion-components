const path = require("path");

module.exports = {
    entry: "./source/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        clean: true,
        library: {
            name: "stevencreates",
            type: 'umd',
        }
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ["@babel/env", "@babel/preset-react" ]
              }
            }
          }
        ]
      } 
      
}


