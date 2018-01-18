import React from 'react';
import { Grid } from 'semantic-ui-react';
import Container from '../../components/Container';
import QueueTable from '../../modules/QueueTable';
import TicketInfo from '../../modules/TicketInfo';

const ClientContainer = (props) => {
    return (
        <Container>
            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <TicketInfo />
                    </Grid.Column>
                    <Grid.Column>
                        <QueueTable />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default ClientContainer;
