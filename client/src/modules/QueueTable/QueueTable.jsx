import React, { Component } from 'react';
import { Segment, Header, Divider, Table } from 'semantic-ui-react';
import api from "../../api";

export default class QueueTable extends Component
{
    state = {
        table: []
    };

    componentDidMount()
    {
        api.emit('getTable');
        api.on('updateTable', (table) => this.setState({ table }));
    }

    render()
    {
        const table = this.state.table.map((item, index) => (
            <Table.Row key={index}>
                <Table.Cell>Окно #{item.window}</Table.Cell>
                <Table.Cell>{item.ticket}</Table.Cell>
            </Table.Row>
        ));

        return (
            <Segment>
                <Header as='h2'>Табло очереди</Header>
                <Divider horizontal={true} />
                <Table celled striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Окно</Table.HeaderCell>
                            <Table.HeaderCell>Билет</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {table}
                    </Table.Body>
                </Table>
            </Segment>
        );
    }
}