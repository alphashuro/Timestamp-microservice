'use strict';

var express = require('express');
var app = express();
const encoder = require('encoder.js');
var processQuery = require('./process_query');

app.get('/*', function(req, res){
  let query = req.path.slice(1);
  res.send(processQuery(query));
});

app.listen(8080);
