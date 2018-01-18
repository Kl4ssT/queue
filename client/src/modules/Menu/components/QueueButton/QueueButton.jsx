import React from 'react';
import {Menu as MenuComponent, Button, Icon} from "semantic-ui-react";

const QueueAddButton = (props) => {
    return (
        <Button as={MenuComponent.Item} name="add" onClick={props.openQueueModal}>
            <Icon name="add user" />
            Встать в очередь
        </Button>
    );
};

const QueueRemoveButton = (props) => {
    return (
        <Button as={MenuComponent.Item} name="remove" onClick={props.removeFromQueue}>
            <Icon name="remove user" />
            Покинуть очередь
        </Button>
    );
};

export {
   QueueAddButton,
   QueueRemoveButton
};