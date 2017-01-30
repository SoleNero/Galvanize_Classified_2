'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const messages = require('./routes/classifieds');

app.use(bodyParser.json());
app.use('/classifieds', messages);



app.use(express.static(path.join(__dirname, 'app/public')))
//wildcard
app.use('*', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, 'app/public')})
})

// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//     console.log('Listening on port', port);
// });

module.exports = app;