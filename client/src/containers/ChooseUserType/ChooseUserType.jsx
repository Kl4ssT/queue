import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Icon } from 'semantic-ui-react';

const ChooseUserType = () => {
    return (
        <Modal size="tiny" dimmer="blurring" open={true}>
            <Modal.Header>Выберите тип</Modal.Header>
            <Modal.Actions>
                <Link to="/client">
                    <Button color="blue" icon="user" labelPosition="right" content="Клиент" />
                </Link>
                <Link to="/employee">
                    <Button color="orange" icon="user circle outline" labelPosition="right" content="Сотрудник" />
                </Link>
            </Modal.Actions>
        </Modal>
    );
};

export default ChooseUserType;