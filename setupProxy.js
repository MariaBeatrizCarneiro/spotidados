const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://spotidados.runcodeschool.com',
            changeOrigin: true,
        })
    );
};