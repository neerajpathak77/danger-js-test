import path from 'path';
// import webpack from "webpack";
import HtmlWebpackPlugin from 'html-webpack-plugin';

import webpack, { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

import ESLintPlugin from 'eslint-webpack-plugin';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
  devServer: {
    contentBase: path.resolve(__dirname, 'frontend/dist/dev'),
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 8080
  },
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, 'frontend/src/index.tsx'),
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(ts|js)x?$/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
          }
        }
      },
      {
        exclude: /node_modules/,
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'frontend/dist/dev')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'frontend/public/index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx']
    })
  ],
  resolve: {
    // NP Move me to base calss
    // NP REMOVE ALL ALIASES
    alias: {
      components: path.resolve(__dirname, 'frontend/src/components'),
      hooks: path.resolve(__dirname, 'frontend/src/hooks'),
      types: path.resolve(__dirname, 'frontend/src/types'),
      utils: path.resolve(__dirname, 'frontend/src/utils')
    },
    extensions: ['.tsx', '.ts', '.js'],
    modules: ['node_modules', path.join(__dirname, 'frontend/src')]
  }
};

export default config;
