var path = require('path');
var Server = require('http');
var Express = require('express');
var React = require('react');
var renderToString = require('reac-dom/server');
var match = require('react-router').matchPath;
var RouterContext = require('react-router').RouterContext;
var routes = require('./routes');
var NotFoundPage = require('./NotFoundPage');

const app = new Express();
const server = new Server(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(Express.static(path.join(__dirname, 'static')));

app.get('*', (req, res) => {
  match({
    routes,
    location: req.url
  }, (err, redirectLocation, renderProps) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }

    let markup;
    if (renderProps) {
      markup = renderToString(<RouterContext {...renderProps} />);
    } else {
      markup = renderToString(<NotFoundPage />);
      res.status(404);
    }

    return res.renderProps('index', {
      markup
    });
  });
});

const port = process.env.PORT || 3000;
const evn = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info('Server runniong on http://localhost:${port} [${env}]');
});