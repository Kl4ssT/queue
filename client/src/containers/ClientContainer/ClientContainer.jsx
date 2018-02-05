import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Container from '../../components/Container';
import QueueTable from '../../modules/QueueTable';
import TicketInfo from '../../modules/TicketInfo';
import api from "../../api";

export default class ClientContainer extends Component
{
   state = {
       user: null
   };

    componentDidMount()
    {
        api.on('addedToQueue', (user) => {
            this.setState({ user });
        });

        api.on('leavedFromQueue', () => {
            this.setState({ user: null });
        });
    }

    render()
    {
        return (
            <Container>
                <Grid>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <TicketInfo user={this.state.user} />
                        </Grid.Column>
                        <Grid.Column>
                            <QueueTable />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}
