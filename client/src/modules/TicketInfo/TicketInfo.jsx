import React, { Component } from 'react';
import { Segment, Header, Form } from 'semantic-ui-react';
import TicketNumber from './TicketNumber';
import api from "../../api";
import TicketForm from "./TicketForm";

export default class TicketInfo extends Component
{
    componentDidMount()
    {

    }

    render()
    {
        return (
            <Segment>
                { this.props.user ? <TicketNumber ticket={this.props.user.ticket} /> : <TicketForm /> }
            </Segment>
        );
    }
}