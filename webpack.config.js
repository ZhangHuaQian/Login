

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path =require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const devMode = process.env.NODE_ENV !== 'production';
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const postcssPresetEnv = require('postcss-preset-env');
// const ExtractTextPlugin=require('extract-text-webpack-plugin')

module.exports={
    entry: './src/main.js',
  
    output:{
      filename: '[name].js',
      path: __dirname + '/dist'
    },
    plugins: [new HtmlWebpackPlugin({
        title:'mypcj',
        filename:'index.html',
        template:'template.html'
    }),
   
    
   
    
    
    new VueLoaderPlugin(),
    
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
            },
            exclude:/testHtml/
          },

         

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
            exclude: /(node_modules|bower_components|testHtml)/,
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
            ],exclude:/(node_modules|testHtml)/
          },


          {//css-loader
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
            
          },
          
          // 
          
          
          
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


        


          
          
        ]
      }

};