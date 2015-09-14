var express = require('express')
var app = express()
var buffer = new Buffer(16);
var fs = require ('fs');
app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  
  response.sendfile('index.html');
  fs.readFile('index.html', 'utf8', function(err, data) {
     if (err) {
         return console.log(err);
     }
     console.log(data);
     });
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
