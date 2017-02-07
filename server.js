'use strict';

const express = require('express');
const app = express();
const messages = require('./routes/classifieds');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended:false
}));
app.use(bodyParser.json());
app.use(express.static('./public'));
app.use('/classifieds', messages);

app.use('/jquery', express.static('node_modules/jquery/dist'));
app.use('/bootstrap', express.static('node_modules/bootstrap/dist/js'));
app.use('/angular', express.static('node_modules/angular'));
app.use('/ui-bootsratp', express.static('node_modules/ui-bootsrtap'));
app.use('/angular-ui-router', express.static('node_modules/angular-uirouter/release'));

const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log('Listening on port', port);
});

module.exports = app;