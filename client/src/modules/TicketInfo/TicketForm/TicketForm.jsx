import React from 'react';
import { Header, Form, Button } from 'semantic-ui-react';

const TicketForm = (props) => {
    return (
        <div>
            <Header as="h3">Получить билет</Header>
            <Form>
                <Form.Input label="Введите ФИО" placeholder="Например: Иванов Иван Иванович" />
                <Form.Select label="Выберите услугу" options={[]} />
                <Button color="orange">Встать в очередь</Button>
            </Form>
        </div>
    );
};

export default TicketForm;