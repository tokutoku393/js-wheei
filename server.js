var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.logger('dev'));
app.use(express.compress());

server.listen(5000);

app.use(express.static(__dirname));

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
