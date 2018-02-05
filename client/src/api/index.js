import Socket from 'socket.io-client';

const api = Socket('http://localhost:4000/');

export default api;