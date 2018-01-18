import React, {Component} from 'react';
import { Modal, Form, Button } from 'semantic-ui-react';

const QueueModal = (props) => {
    return (
        <Modal dimmer="blurring" open={props.opened}>
            <Modal.Header>Получение номера</Modal.Header>
            <Modal.Content>
                <Form unstackable loading={props.loaded}>
                    <Form.Group widths={2}>
                        <Form.Input label="Ваше ФИО" placeholder="Например: Иванов Иван Иванович" />
                        <Form.Select label="Выберите услугу" options={[{key: 'a', text: 'Интернет', value: 1}]} />
                    </Form.Group>
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button negative onClick={props.closeQueueModal} disabled={props.loaded}>Отмена</Button>
                <Button positive labelPosition='right' icon='checkmark' content='Встать в очередь' onClick={props.loadedQueueModal} disabled={props.loaded} />
            </Modal.Actions>
        </Modal>
    );
}

export default QueueModal;