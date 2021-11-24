const { createProxyMiddleware } = require('http-proxy-middleware')
 
module.exports = function(app:any) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://159.75.4.191:5000',
            changeOrigin: true, // needed for virtual hosted sites
            ws: true, // proxy websockets
            pathRewrite: {
                '^/api': ''
            }
        })
    )
}

export {}