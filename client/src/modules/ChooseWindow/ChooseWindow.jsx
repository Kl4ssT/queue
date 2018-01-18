import React from 'react';
import { Modal, Button } from 'semantic-ui-react';

const ChooseWindow = (props) => {
	return (
		<Modal dimmer="blurring" open={props.opened}>
			<Modal.Header>Занять окно</Modal.Header>
			<Modal.Content>
				<Button.Group>
					<Button>Окно #1</Button>
					<Button>Окно #2</Button>
					<Button>Окно #3</Button>
					<Button>Окно #4</Button>
					<Button>Окно #5</Button>
					<Button>Окно #6</Button>
				</Button.Group>
			</Modal.Content>
		</Modal>
	);
};

export default ChooseWindow;