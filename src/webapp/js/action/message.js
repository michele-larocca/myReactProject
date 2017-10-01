export const ADD_MESSAGE = 'ADD_MESSAGE'
export const OVERRIDE_MESSAGES = 'OVERRIDE_MESSAGES'

export const addMessage = (text) => ({
    type: ADD_MESSAGE,
    payload: text 
});

export const overrideMessages = (messages) => ({
    type: OVERRIDE_MESSAGES,
    payload: messages 
});