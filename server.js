var socketio = require('socket.io');
 
// Listen on port 3636
var io = socketio.listen(3636);
 
 var name="";
 
io.sockets.on('connection', function (socket) {

    // Broadcast a user's message to everyone else in the room
    socket.on('send', function (data) {
        io.sockets.emit('message', data);
	
	});

	socket.on('save', function (data) {
        name = name + data.message + " ";
	
	});
	
	socket.on('save2', function (data) {
        data.message = data.message + name;
		io.sockets.emit('message',data);
	
	});
	
});



