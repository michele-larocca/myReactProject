import cards from './card';
import messages from './message';
import notification from './notification';
import { combineReducers } from 'redux';

export default combineReducers({
    cards,
    messages,
    notification
});