export const ADD_CARD = 'ADD_CARD';
export const DEL_CARD = 'DEL_CARD';
export const DEL_ALL_CARDS = 'DEL_ALL_CARDS';

export const addCard = () => ({
    type: ADD_CARD,
    payload: {}
});

export const delCard = (id) => ({
    type: DEL_CARD,
    payload: id
});

export const delAllCard = () => ({
    type: DEL_ALL_CARDS,
    payload: {}
});

