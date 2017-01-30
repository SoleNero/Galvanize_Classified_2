const express = require('express');
const path = require('path');
const body_parser = require('body-parser');
const app = express();
// const classifieds = require('./routes/classifieds');

//body-parser
app.use(body_parser.json());

//conecting with fron-end and node_modules that are not public
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/.../', 'node_modules')));

app.use('/api/classifieds', require('./routes/classifieds'))

// app.use('/classifieds', classifieds);

//wildcard route
app.use('*', (req, res, next) => {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use(function(err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  console.log(err)
  res.status(err.status || 500)
  res.json(err)
})

// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//   console.log('Listening on port', port);
// });

module.exports = app;


