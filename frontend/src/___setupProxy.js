// const { createProxyMiddleware } = require('http-proxy-middleware')

// module.exports = function (app) {
//     app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'http://localhost:5005',
//       changeOrigin: true,
//     })
//   );
//     app.use(
//         '/api/mailchimp',
//         createProxyMiddleware({
//             target: 'https://us13.api.mailchimp.com',
//             changeOrigin: true,
//             pathRewrite: {
//                 '^/api': '/3.0',
//             },
//         })
//     )

// }