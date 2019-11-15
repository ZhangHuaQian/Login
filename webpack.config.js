

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path =require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const devMode = process.env.NODE_ENV !== 'production';
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const postcssPresetEnv = require('postcss-preset-env');
// const ExtractTextPlugin=require('extract-text-webpack-plugin')

module.exports={
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
        title:'mypcj',
        filename:'index.html',
        template:'template.html'
    }),
    // new MiniCssExtractPlugin({
    //   // Options similar to the same options in webpackOptions.output
    //   // both options are optional
    //   filename: devMode ? '[name].css' : '[name].[hash].css',
    //   chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    // }),
    
    new VueLoaderPlugin(),
    // new ExtractTextPlugin('[name].css')
  ],
    
    mode: 'production',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
      },
      module: {
        rules: [

          {//html-loader
            test: /\.(html)$/,
            use: {
              loader: 'html-loader',
              options: {
                attrs: [':data-src']
              }
            }
          },

          // {//url-loader
          //    test: /\.(jpe?g|png|gif|ttf|eot|svg|woff|woff2)$/i,
          //     use:[
          //       {loader: "url-loader"},
                  
          //         {loader: "file-loader"},
          //         {options: {
          //           limit: 8192 }  }
                  
                 
                
          //     ]
                 
              
          //   },

          {
            test: /\.(jpe?g|png|gif|ttf|eot|svg|woff|woff2)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 500000
                }
              }
            ]
          },

            {//处理vue文件
              test: /\.vue$/,
              use: 'vue-loader',
              exclude:/node_modules/
             } ,

          {test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['babel-preset-env']
              }
            }
          },
          {//style-loader
            test: /\.css$/,
            use: [
              { loader: "style-loader" },
              { loader: "css-loader" }
            ],exclude:/node_modules/
          },


          {//css-loader
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
            
          },
          
          // 
          
          // {
          //   test: /\.(sa|sc|c)ss$/,
          //   use: [
          //     {
          //       loader: MiniCssExtractPlugin.loader,
          //       options: {
          //         hmr: process.env.NODE_ENV === 'development',
          //       },
          //     },'style-loader',
          //     'css-loader',
          //     'postcss-loader',
          //     'sass-loader',
          //   ],
          // },
          
          {//sass-loader
            test: /\.scss$/,
      use: [{
          loader: "style-loader" // 将 JS 字符串生成为 style 节点
      }, {
          loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
      }, {
          loader: "sass-loader" // 将 Sass 编译成 CSS
      }]
          },


          // {
          //   test: /\.css$/,
          //   use: [
          //     'style-loader',
          //     { loader: 'css-loader', options: { importLoaders: 1 } },
          //     { loader: 'postcss-loader', options: {
          //       ident: 'postcss',
          //       plugins: () => [
          //         postcssPresetEnv(/* pluginOptions */)
          //       ]
          //     } }
          //   ]
          // },


          // {
          //   test: /\.css$/,
          //   exclude: /node_modules/,
          //   use: [
          //     {
          //       loader: 'style-loader',
          //     },
          //     {
          //       loader: 'css-loader',
          //       options: {
          //         importLoaders: 1,
          //       }
          //     },
          //     {
          //       loader: 'postcss-loader'
          //     }
          //   ]
          // }

          
        ]
      }

};