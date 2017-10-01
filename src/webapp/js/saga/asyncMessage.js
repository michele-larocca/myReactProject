import { put, call, takeEvery } from 'redux-saga/effects'
import { showErrorNotification } from '../action/notification'
import { printSysDate } from '../shared/util'
import { 
    ASYNC_GET_MESSAGES, 
    startedAsyncMessage, 
    overrideMessages,
    finishedAsyncMessage
} from '../action/message'

const executeFetch = (onResetMessages) => {
    return fetch('/rest/getDeafaultMessages')
    .then(response => response.json())
    .then(response => ({response}))
    .catch(error => ({error}));
};

export function* getMessagesAsync() {
    yield put(startedAsyncMessage());
    const { response, error } = yield call(executeFetch);

    if(response) 
        yield put(overrideMessages(response));
    else 
        yield put(showErrorNotification('Error Fetch :' + error));
    
    yield put(finishedAsyncMessage());
};

export function* watchGetMessagesAsync() {
    yield takeEvery(ASYNC_GET_MESSAGES, getMessagesAsync);
};