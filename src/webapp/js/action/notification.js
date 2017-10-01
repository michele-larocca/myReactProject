export const SHOW_NOTIFICATION = 'ERROR_NOTIFICATION';
export const CLOSE_NOTIFICATION = 'CLOSE_NOTIFICATION';

export const showErrorNotification = (msgNotification) => ({
    type: SHOW_NOTIFICATION,
    payload: msgNotification
});

export const hideErrorNotification = () => ({
    type: CLOSE_NOTIFICATION,
    payload: {}
});