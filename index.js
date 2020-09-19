var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var p = process.env.PORT || 3000;

server.listen(p, () => {
  console.log("Listening on port %d", p)
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {

  socket.on('message', (nm, msg) => {
    console.log(nm + ":" + msg);
    io.emit('message', nm, msg);
  });

  socket.on('status', (nm, sts) => {
    console.log(nm + " is " + sts);
    io.emit('status', nm, sts);
  });



  socket.on('disconnect', () => {

  })
});
