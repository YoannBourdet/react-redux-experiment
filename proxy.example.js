const proxy = require('express-http-proxy');
const app = require('express')();

app.use('/proxy', proxy('www.google.com', {
  forwardPath: (req) => (require('url').parse(req.url).path),
}));
