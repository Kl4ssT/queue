import Socket from 'socket.io-client';

const api = Socket('http://31.31.203.89:4000/');

export default api;