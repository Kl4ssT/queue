import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import ChooseWindow from '../../modules/ChooseWindow';
import Clients from '../../modules/Clients';
import api from '../../api';

export default class EmployeeContainer extends Component
{
	state = {
		modal: {
			opened: true
		},
		window: null
	};

	componentDidMount = () => {
		api.on('stopped', () => {
			this.setState({ window: null });
		});
	};

	_setWindow = (window) => {
		this.setState({ window });
	};

	render()
	{
		return (
			<Segment>
				{
					this.state.window
						?
							<Clients window={this.state.window} />
						:
                        	<ChooseWindow setWindow={this._setWindow} opened={this.state.modal.opened} />
                }
            </Segment>
		);
	}
}