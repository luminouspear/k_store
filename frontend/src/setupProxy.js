const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://us13.api.mailchimp.com',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/3.0',
            },
        })
    )
}