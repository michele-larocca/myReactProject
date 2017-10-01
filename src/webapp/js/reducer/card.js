import { ADD_CARD, DEL_CARD, DEL_ALL_CARDS } from '../action/card';

const cards = (state = [], action) => {
    switch(action.type) {
        case ADD_CARD:
        case DEL_CARD:
        case DEL_ALL_CARDS:
        default: return state;
    }
};

export default cards;