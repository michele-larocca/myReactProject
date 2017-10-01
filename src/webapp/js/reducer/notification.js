import { SHOW_NOTIFICATION, CLOSE_NOTIFICATION } from '../action/notification'

const notification = (notification = {}, action) => {
    switch(action.type){
        case SHOW_NOTIFICATION:
            return { text: action.payload, open: true};
        case CLOSE_NOTIFICATION:
            return {open: false};
        default:
            return notification;
    }
};

export default notification;