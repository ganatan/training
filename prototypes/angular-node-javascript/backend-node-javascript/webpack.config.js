import path from "path";

export default {
  entry: "./src/app.js",
  output: {
    path: path.resolve("dist"),
    filename: "bundle.js"
  },
  experiments: {
    outputModule: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  target: "node",
  mode: "production"
};
