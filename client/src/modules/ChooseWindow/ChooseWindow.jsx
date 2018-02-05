import React, { Component } from 'react';
import { Modal, Button } from 'semantic-ui-react';
import api from '../../api';

export default class ChooseWindow extends Component
{
	state = {
		windows: []
	};

	componentDidMount()
	{
		api.emit('getWindows');
		api.on('windows', (windows) => {
			this.setState({ windows });
		})
	}

	_setWindow = (id) => {
		api.emit('setWindow', id);
	};

	render()
	{
        return (
            <Modal dimmer="blurring" open={this.props.opened}>
                <Modal.Header>Занять окно</Modal.Header>
                <Modal.Content>
                    <Button.Group>
						{this.state.windows.map((item, index) => (
                            <Button key={index} onClick={() => this.props.setWindow(item.id)}>Окно #{item.id}</Button>
						))}
                    </Button.Group>
                </Modal.Content>
            </Modal>
        );
	}

}