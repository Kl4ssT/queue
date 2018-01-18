import SocketIO from 'socket.io';

const io = new SocketIO();

io.on('connection', (client) => {

});

export default io;