const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "build"),
  },
  devServer: {
    static: {
      staticOptions: {
        // contentBase: path.resolve("./build"),
        contentBase: path.join(__dirname, "build"),
        index: "index.html",
        compress: true,
        port: 3000,
        historyApiFallback: true,
        proxy: {
          "/api": {
            target: "https://3.34.143.117:3000",
            changeOrigin: true,
          },
        },
      },
    },
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ["babel-loader"],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.p?css$/,
        exclude: [],
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpg)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules|\.d\.ts$/, // this line as well
        use: {
          loader: "ts-loader",
          options: {
            compilerOptions: {
              noEmit: false, // this option will solve the issue
            },
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
};
