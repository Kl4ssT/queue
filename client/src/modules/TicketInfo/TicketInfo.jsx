import React from 'react';
import { Segment, Header, Form } from 'semantic-ui-react';
import TicketForm from './TicketForm';

const TicketInfo = (props) => {
    return (
        <Segment>
            <TicketForm />
        </Segment>
    );
};

export default TicketInfo;