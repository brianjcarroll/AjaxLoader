var express = require('express');
var app = express();

// app.use(['/page-four', '/page-three', '/page-two'], express.static(__dirname + '/example'));

app.use(express.static('example'));

app.get('/', function(req, res){
  res.sendFile('index.html');
});

// app.get('/example/page-two', function(req, res) {
//   res.sendFile(__dirname + '/example/page-two.html');
// });
//
// app.get('/example/page-three', function(req, res) {
//   res.sendFile(__dirname + '/example/page-three.html');
// });
//
// app.get('/example/page-four', function(req, res) {
//   res.sendFile(__dirname + '/example/page-four.html');
// });

app.listen(8080);
