// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
var express = require('express');
var fs = require('fs');
var jsonData = {count: 12, message: 'hey'};

var app = express();

app.get('/', function (req, res) {
  fs.readFile('./index.html', function (err, html) {
    res.write(html);
    res.end();
  });
})

app.listen(3000);