const { createProxyMiddleware } = require('http-proxy-middleware')
 
module.exports = function(app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://159.75.4.191:5000',
            changeOrigin: true, // needed for virtual hosted sites
            ws: true, // proxy websockets
            pathRewrite: {
                '^/api': ''
            },
            onProxyReq(proxyReq, req, res) {
                proxyReq.setHeader('cookie', 'SERVER_TOKEN=153b8baf-4b2d')
            } 
        }),
        // https://www.mocky.io/v2/5cc8019d300000980a055e76
        createProxyMiddleware('/v2', {
            target: 'https://www.mocky.io',
            changeOrigin: true, // needed for virtual hosted sites
            ws: true, // proxy websockets
            pathRewrite: {
                '^/v2': '/v2'
            }
        })
    )
}