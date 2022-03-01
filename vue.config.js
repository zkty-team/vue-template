const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin')

module.exports = {
  publicPath: './',
  css: {
    extract: false,
  },
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin(
        {
          // root microapp.json copy to dist folder
          patterns: [
            {
              from: path.resolve(__dirname, "microapp.json"),
              to: path.resolve("dist")
            }
          ]
        }
      ),
      new FileManagerPlugin({
        // dist archive
        events: {
          onEnd: {
            archive: [{ source: './dist/', destination: './dist/setYourProjectName.zip' }]
          }
        }
      })
    ],
    optimization: {
      splitChunks: false
    }
  },
  devServer: {
    overlay: {
      warnings: false, // 不显示警告
      errors: false	   // 不显示错误
    }
  },
  lintOnSave:false // 关闭eslint检查
}