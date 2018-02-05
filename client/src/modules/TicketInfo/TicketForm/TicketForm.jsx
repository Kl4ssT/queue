import React, { Component } from 'react';
import { Header, Form, Button } from 'semantic-ui-react';
import api from "../../../api";

export default class TicketForm extends Component
{
    state = {
        name: '',
        services: [],
        choosedService: null
    };

    componentDidMount()
    {
        api.emit('getServices');
        api.on('services', (services) => this.setState({ services }));
    }

    _getServices = () => {
        const services = [];

        this.state.services.map((item, index) => services.push({
            key: item.id,
            value: item.id,
            text: item.service
        }));

        return services;
    };

    _addToQueue = () => {
        api.emit('addToQueue', { name: this.state.name, service: this.state.choosedService });
    };

    render()
    {
        return (
            <div>
                <Header as="h3">Получить билет</Header>
                <Form>
                    <Form.Input label="Введите ФИО" onChange={(e) => this.setState({ name: e.target.value })} placeholder="Например: Иванов Иван Иванович" />
                    <Form.Select label="Выберите услугу" options={this._getServices()} onChange={(e, options) => this.setState({ choosedService: options.value })} />
                    <Button color="orange" onClick={this._addToQueue}>Встать в очередь</Button>
                </Form>
            </div>
        );
    }
}