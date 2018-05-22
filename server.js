var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get("/", function(req, res) {
  res.sendfile("client.html");
});

http.listen('8888', function() {
  console.log("start socket_chat server with 8888");
});
