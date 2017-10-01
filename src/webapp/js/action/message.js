export const ADD_MESSAGE = 'ADD_MESSAGE'
export const ASYNC_GET_MESSAGES = 'ASYNC_GET_MESSAGES'
export const ASYNC_STARTED_MESSAGES = 'ASYNC_STARTED_MESSAGES'
export const ASYNC_FINISHED_MESSAGES = 'ASYNC_FINISHED_MESSAGES'
export const OVERRIDE_MESSAGES = 'OVERRIDE_MESSAGES'

export const addMessage = (text) => ({
    type: ADD_MESSAGE,
    payload: text 
});

export const startedAsyncMessage = () => ({
    type: ASYNC_STARTED_MESSAGES,
    payload: {}
});

export const finishedAsyncMessage = () => ({
    type: ASYNC_FINISHED_MESSAGES,
    payload: {}
});

export const asyncGetMessages = () => ({
    type: ASYNC_GET_MESSAGES,
    payload: {}
});


export const overrideMessages = (messages) => ({
    type: OVERRIDE_MESSAGES,
    payload: messages 
});