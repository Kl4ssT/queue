import React, {Component} from 'react';
import { Header, Icon, Container, Button } from 'semantic-ui-react';
import api from '../../../api';

class TicketNumber extends Component {
    _leaveFromQueue = () => {
        api.emit('leaveFromQueue', this.props.ticket.id);
    };

    render = () => {
        return (
            <div>
                <Container textAlign='center'>
                    <Header as="h2" icon>
                        <Icon name="ticket" />
                        Ваш билет { this.props.ticket.ticketName }
                        <Header.Subheader>Дождитесь, пока сотрудник вас пригласит</Header.Subheader>
                    </Header>
                </Container>
                <Container textAlign='center'>
                    <Button color="red" onClick={this._leaveFromQueue}>Уйти из очереди</Button>
                </Container>
            </div>
        );
    }
}

export default TicketNumber;