import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import ChooseWindow from '../../modules/ChooseWindow';

class EmployeeContainer extends Component
{
	state = {
		modal: {
			opened: true
		}
	};

	render = () => {
		return (
			<Segment>
				<ChooseWindow opened={this.state.modal.opened} />
			</Segment>
		);
	}
}

export default EmployeeContainer;