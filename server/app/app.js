import SocketIO from 'socket.io';
import models from "./db";
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "./config";

const io = new SocketIO();

io.on('connection', (client) => {
    client.on('getServices', async () => {
        client.emit('services', await models.services.findAll());
    });

    client.on('addToQueue', async (data) => {
        const { name, service } = data;

        if (name && service)
        {
            const user = await models.users.create({ name, token: await jwt.sign(name, JWT_SECRET)});
            const ticket = await models.tickets.create({ id_user: user.id, id_service: service });
            const serviceItem = await models.services.findById(service);

            const ticketName = serviceItem.identifier + ticket.id;

            client.emit('addedToQueue', { user: { name: user.name, token: user.token }, ticket: { id: ticket.id, ticketName } });
            io.sockets.emit('newTicket', { user: user.name, ticket: {id: ticket.id, ticketName } });
        }
    });

    client.on('leaveFromQueue', async (ticket) => {
        await models.tickets.destroy({ where: { id: ticket } });
        client.emit('leavedFromQueue');
        io.sockets.emit('removeTicket', ticket);
        io.sockets.emit('updateTable', await getTable());
    });

    client.on('getWindows', async () => {
        const windows = await models.windows.findAll();
        client.emit('windows', windows);
    });

    client.on('getTickets', async () => {
        const tickets = await models.tickets.findAll();
        client.emit('tickets', tickets);
    });

    client.on('setTicket', async (data) => {
        const ticket = await models.tickets.findById(data.ticket);
        const window = await models.windows.findById(data.window);

        const currentTime = Date.parse(new Date());

        const diffDate = Math.abs(currentTime - window.lastStart);

        await window.update({ id_ticket: ticket.id, lastStart: Date.parse(new Date()), countClients: window.coutnClients + 1, time: window.time + diffDate });
        client.emit('settedTicket', ticket);
        io.sockets.emit('updateTable', await getTable());
    });

    client.on('getTable', async () => {
        client.emit('updateTable', await getTable());
    });

    client.on('stopWork', async (window) => {
        const window = await models.windows.findById(window);
        const currentTime = Date.parse(new Date());

        const diffDate = Math.abs(currentTime - window.lastStart);
        await window.update({ time: window.time + diffDate, id_ticket: null });
        client.emit('stopped');
    });

    client.on('getWindow', async () => {
        const window = await models.windows.findOne({ order: time });
        client.emit('window', window);
    });
});

const getTable = async () => {
    const table = [];

    const windows = await models.windows.findAll();
    for (let window of windows)
    {
        const ticket = await models.tickets.findById(window.id_ticket);
        let ticketName = null;
        if (ticket)
        {
            const service = await models.services.findById(ticket.id_service);
            ticketName = service.identifier + ticket.id;
        }
        table.push({
            window: window.id,
            ticket: ticketName
        });
    }

    console.log(table);

    return table;
};

export default io;