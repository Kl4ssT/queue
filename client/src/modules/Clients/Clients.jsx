import React, {Component} from 'react';
import { Modal, Button } from 'semantic-ui-react';
import api from '../../api';

export default class Clients extends Component {
    state = {
        tickets: []
    };

    componentDidMount()
    {
        api.emit('getTickets');
        api.on('tickets', (tickets) => this.setState({ tickets }));
        api.on('newTicket', (ticket) => this.setState({ tickets: [ ...this.state.tickets, ticket.ticket ] }));
        api.on('removeTicket', (ticket) => this.setState({ tickets: this.state.tickets.filter((item) => item.id !== ticket) }));
        api.on('settedTicket', (ticket) => {
            const updatedTickets = [];
            this.state.tickets.map((item) => {
                const updatedTicket = item;
                updatedTicket.active = updatedTicket.id === ticket.id;
                updatedTickets.push(updatedTicket);
            });
            this.setState({ tickets: updatedTickets });
        });
    }

    _setTicket = (ticket) => {
        api.emit('setTicket', { ticket: ticket, window: this.props.window });
    };

    _stopWork = () => {
        api.emit('stopWork', this.props.window.id);
    };

    render()
    {
        return (
            <Modal dimmer="blurring" open={true}>
                <Modal.Header>Выберите билет</Modal.Header>
                <Modal.Content>
                    <Button.Group>
                        {this.state.tickets.map((item, index) => (
                            <Button primary={item.active} key={index} onClick={() => this._setTicket(item.id)}>Билет { item.id }</Button>
                        ))}
                    </Button.Group>
                    <Button onClick={this._stopWork}>Остановить работу</Button>
                </Modal.Content>
            </Modal>
        );
    }
}