module.exports = {
  publicPath: './',
    devServer: {
      https: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
      },
    },
    configureWebpack: {
      devServer: {
        headers: { "Access-Control-Allow-Origin": "*" }
      }
    }
  }