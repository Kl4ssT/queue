import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './actions';
import { Sidebar, Icon, Menu as MenuComponent, Button } from 'semantic-ui-react';
import QueueModal from './components/QueueModal';
import WindowsModal from './components/WindowsModal';
import { QueueAddButton, QueueRemoveButton } from "./components/QueueButton/QueueButton";

class Menu extends Component
{
    openQueueModal = () => {
        this.props.openQueueModal();
    };

    render = () => {
        const { queueModal, windowsModal } = this.props;

        const currentQueueButton = <QueueRemoveButton removeFromQueue={this.openQueueModal} />;

        return (
            <Sidebar as={MenuComponent} animation="overlay" visible={true} direction="bottom" inverted={true}>
                { currentQueueButton }
                <WindowsModal{...windowsModal}>
                    <Button as={MenuComponent.Item} name="join">
                        <Icon name="user circle outline" />
                        Занять окно
                    </Button>
                </WindowsModal>
                <QueueModal {...queueModal} closeQueueModal={this.props.closeQueueModal} loadedQueueModal={this.props.loadedQueueModal} />
            </Sidebar>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        queueModal: state.menuReducer.queueModal,
        windowsModal: state.menuReducer.windowsModal
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);