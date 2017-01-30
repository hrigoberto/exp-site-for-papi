var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req , res) {
  res.sendFile('/public/html/index.html', {root: __dirname});
})
app.get('/about', function(req , res) {
  res.sendFile('/public/html/about.html', {root: __dirname});
})
app.get('/services', function(req , res) {
  res.sendFile('/public/html/services.html', {root: __dirname});
})

app.listen(8080, function(){
  console.log('listening on port 8080');
})
