// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data

var express = require('express');
var fs = require('fs');
var jsonData = {count: 12, message: 'hey'};

var app = express();

app.get('/', function (req, res) {
  fs.readFile('./index.html', function (err, data) {
    if (err) {
      throw err;
    }
    res.write(data);
    res.end();
  });
});

app.get('/data', function (req, res) {
  res.json(jsonData);
});

app.listen(3000, function () {
  console.log('Listening at port 3000');
});