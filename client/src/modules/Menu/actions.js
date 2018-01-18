import { TOGGLE_QUEUE_MODAL, TOGGLE_WINDOWS_MODAL, PRELOAD_QUEUE_MODAL } from '../../constants/actionTypes';

/*--- QUEUE MODAL ---*/
export const openQueueModal = () => {
    return {
        type: TOGGLE_QUEUE_MODAL,
        payload: true
    }
};

export const closeQueueModal = () => {
    return {
        type: TOGGLE_QUEUE_MODAL,
        payload: false
    }
};

export const loadedQueueModal = () => {
    return {
        type: PRELOAD_QUEUE_MODAL,
        payload: true
    };
};

export const unloadedQueueModal = () => {
    return {
        type: PRELOAD_QUEUE_MODAL,
        payload: false
    };
};



export const openWindowsModal = () => {
    return {
        type: TOGGLE_WINDOWS_MODAL,
        payload: true
    }
};

export const closeWindowsModal = () => {
    return {
        type: TOGGLE_WINDOWS_MODAL,
        payload: false
    }
};