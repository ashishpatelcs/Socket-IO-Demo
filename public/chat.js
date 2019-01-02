// make connection

var socket = io.connect("http://localhost:3000");

// query dom
var message = document.getElementById("msg");
var handle = document.getElementById("handle");
var sendBtn = document.getElementById("send");
var output = document.getElementById("output");
var feedback = document.getElementById("feedback");

// emit events
sendBtn.addEventListener("click", () => {
  socket.emit("chat-msg", {
    message: message.value,
    handle: handle.value
  });
});

message.addEventListener("keypress", () => {
    socket.emit("typing", handle.value);
})

// listen events
socket.on("chat-msg", data => {
    feedback.innerHTML = '';
  output.innerHTML +=
    "<p><strong>" + data.handle + ": </strong>" + data.message + "</p>";
});

socket.on('typing', data => {
    feedback.innerHTML = '<p><em>' + data + 'is typing...</em></p>';
});
