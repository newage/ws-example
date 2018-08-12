var socket = new WebSocket('ws://127.0.0.1:1337');

socket.onopen = function() {
    socket.send('connection establish...');
};

socket.onmessage = function(event) {
    console.log(event.data)
};