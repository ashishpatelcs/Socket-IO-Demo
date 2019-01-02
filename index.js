var express = require('express');
var socket = require('socket.io');

// app setup
var app = express();
var server = app.listen(3000, () => console.log('Server listening on port 3000.'));

// static files
app.use(express.static('public'));

// socket setup
var io = socket(server);
io.on('connect', (socket) => {
    console.log('new socket connection: ', socket.id);
})