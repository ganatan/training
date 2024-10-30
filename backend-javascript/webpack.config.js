import path from 'path';
import { fileURLToPath } from 'url';
// import CopyWebpackPlugin from 'copy-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'production',
  entry: './src/server.js',
  target: 'async-node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.bundle.mjs',
    module: true,
    chunkFormat: 'module',
  },
  experiments: {
    outputModule: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
  ],
  resolve: {
    extensions: ['.js'],
  },
};
