// import path from 'path';
// import webpack from 'webpack';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
// import ESLintPlugin from 'eslint-webpack-plugin';
// import { CleanWebpackPlugin } from 'clean-webpack-plugin';

// const config: webpack.Configuration = {
//   mode: 'production',
//   entry: path.resolve(__dirname, 'frontend/src/index.tsx'),
//   output: {
//     // path: path.resolve(__dirname, "build"),
//     path: path.resolve(__dirname, 'frontend/dist/dev'),
//     filename: '[name].[contenthash].js',
//     publicPath: '',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(ts|js)x?$/i,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: [
//               '@babel/preset-env',
//               '@babel/preset-react',
//               '@babel/preset-typescript',
//             ],
//           },
//         },
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.tsx', '.ts', '.js'],
//     alias: {
//       // 'elli-config': path.resolve(__dirname, 'config/'),
//       // static: path.resolve(__dirname, 'frontend/src/static/'),
//       // '@babel/runtime': path.resolve(__dirname, 'node_modules/@babel/runtime'),
//       // fbjs: path.resolve(__dirname, 'node_modules/fbjs'),
//       // 'hoist-non-react-statics': path.resolve(
//       //   __dirname,
//       //   'node_modules/hoist-non-react-statics',
//       // ),
//       // warning: path.resolve(__dirname, 'node_modules/warning'),
//       // components: path.resolve(__dirname, 'frontend/src/components'),
//       components: path.resolve(__dirname, './frontend/src/components'),
//       // config: path.resolve(__dirname, './frontend/src/config/'),
//       // icons: path.resolve(__dirname, './frontend/src/static/icons'),
//       // src: path.resolve(__dirname, './frontend/src'),
//       // utils: path.resolve(__dirname, './frontend/src/utils'),
//       // mocks: path.resolve(__dirname, './__mocks__'),
//       // backend: path.resolve(__dirname, './backend'),
//     },
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.resolve(__dirname, 'frontend/src/index.html'),
//     }),
//     new ForkTsCheckerWebpackPlugin({
//       async: false,
//     }),
//     new ESLintPlugin({
//       extensions: ['js', 'jsx', 'ts', 'tsx'],
//     }),
//     new CleanWebpackPlugin(),
//   ],
// };

// export default config;
