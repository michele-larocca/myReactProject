export const getMessages = (state) => {
    return state.messages.length > 0 ? state.messages : [{id: 'EMPTY_TEXT', text: 'Empty List ...'}]
};