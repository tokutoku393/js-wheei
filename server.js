var express = require('express');
var app = express();


app.set('port', process.env.PORT || 5000);


app.use(express.logger('dev'));
app.use(express.compress());
app.use(express.static(__dirname));

var server = require('http').Server(app);
var io = require('socket.io')(server);


app.listen(app.get('port'), function() {
  console.log('Server listening on port %s', app.get('port'));
});


/*
var fs = require('fs');
var http = require('http');
var server = http.createServer();

server.on('request', function(req, res) {
  var stream = fs.createReadStream('index.html');
  res.writeHead(200, {'Content-Type': 'text/html'});
  stream.pipe(res);
});
*/


io.on('connection', function(socket) {
  socket.on("message", function(sent){
    console.log(sent);
    if(sent.value.mode === 'portrait'){
      //
    }
    if(sent.value.mode === 'landscape'){
      createjs.Ticker.addEventListener("tick", update);
    }
  });
});
