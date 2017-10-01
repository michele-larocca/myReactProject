import { ADD_MESSAGE, OVERRIDE_MESSAGES } from '../action/message'
import { getUniqueKey } from '../shared/util'

const messages = (state = [], action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return [...state, {id: getUniqueKey(), date: new Date(), text: action.payload}];
        case OVERRIDE_MESSAGES:
            return action.payload;
        default:
            return state;
    }
}

export default messages;