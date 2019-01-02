// make connection

var socket = io.connect('http://localhost:3000');

// query dom
var message = document.getElementById('msg');
var handle = document.getElementById('handle');
var sendBtn = document.getElementById('send');
var output = document.getElementById('output');

// emit events
sendBtn.addEventListener('click', () => {
    socket.emit('chat-msg', {
        message: message.value,
        handle: handle.value
    });
})