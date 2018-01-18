import React from 'react';
import { Segment, Header, Divider, Table } from 'semantic-ui-react';

const QueueTable = (props) => {
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
                    <Table.Row>
                        <Table.Cell>Окно #1</Table.Cell>
                        <Table.Cell>В151</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Окно #2</Table.Cell>
                        <Table.Cell>А164</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </Segment>
    );
};

export default QueueTable;