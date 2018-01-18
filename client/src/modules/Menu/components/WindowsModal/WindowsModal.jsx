import React, {Component} from 'react';
import { Modal, Form, Button } from 'semantic-ui-react';

class WindowsModal extends Component {

    state = {
        visible: true
    };

    render = () => {
        return (
            <Modal size="tiny" trigger={this.props.children} dimmer="blurring" open={this.props.opened} onClose={() => console.log('Closing')}>
                <Modal.Header>Занять окно</Modal.Header>
                <Modal.Content>
                    <Form unstackable>
                        <Form.Select label="Выберите услугу" options={[{key: 'a', text: 'Окно #1', value: 1}]} />
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative>Отмена</Button>
                    <Button positive labelPosition='right' icon='checkmark' content='Занять окно' />
                </Modal.Actions>
            </Modal>
        );
    }
}

export default WindowsModal;