var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.logger('dev'));
app.use(express.compress());

server.listen(5000);

process.env.PWD = process.cwd()
app.use(express.static(process.env.PWD));

io.on('connection', function(socket) {
  socket.join('single');
  socket.on("message", function(sent){
    console.log(sent);
    socket.to('single').emit('event', { mode: sent.mode });
  });
});
