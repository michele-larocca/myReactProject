import Immutable from 'immutable'
import { SET_LABEL } from '../action/hello'

const initialState = Immutable.fromJS({
    message: 'Initial reducer message',
    label: 'Click Here !!!'
});

const helloReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LABEL:
            return state.set('message', action.payload);
        default:
            return state;
    }
}

export default helloReducer;