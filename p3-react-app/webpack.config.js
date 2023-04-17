const path = require('path');
const HTMLWebpackPlugin = require ('html-webpack-plugin');
        module.exports = {
                devServer: {
                  historyApiFallback: true,
                },
                entry: './src/index.js',

                output : {
                  path: path.join(__dirname,'/dist'),
                  filename : 'bundle.js'
                },

                plugins : [
                  new HTMLWebpackPlugin({
                    template : './src/index.html'
                  })
                ],

                module: {
                  rules: [
                    {
                      test: /.js$/,
                      exclude: /node_modules/,
                      use: {
                        loader: 'babel-loader',
                        options: {
                          presets: ['@babel/preset-env','@babel/preset-react']
                        }
                      }
                    },
                    {
                      test: /\.css$/i,
                      loader: "css-loader",
                      options: {
                        url: true,
                      },
                    },
                    {
                      test: /\.(png|jpe?g|gif)$/i,
                      use: [
                        {
                          loader: 'file-loader',
                        }
                      ]
                    },
                    {
                      test: /\.(woff|woff2|eot|ttf|otf)$/i,
                      type: 'asset/resource',
                    },

                  ]
                }
        }
