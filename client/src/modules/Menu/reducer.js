import { TOGGLE_QUEUE_MODAL, TOGGLE_WINDOWS_MODAL, PRELOAD_QUEUE_MODAL } from '../../constants/actionTypes';

const defaultState = {
    queueModal: {
        opened: false,
        loaded: false
    },
    windowsModal: {
        opened: false,
        loaded: false
    }
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case TOGGLE_QUEUE_MODAL:
            return { ...state, queueModal: { ...state.queueModal, opened: action.payload } };
        case PRELOAD_QUEUE_MODAL:
            return { ...state, queueModal: { ...state.queueModal, loaded: action.payload } }
        case TOGGLE_WINDOWS_MODAL:
            return { ...state, windowsModal: { ...state.windowsModal, opened: action.payload } };
        default:
            return state;
    }
};