import SocketIO from 'socket.io';

let io = null;

export const initSocket = (server) => {
    io = SocketIO(server);
};