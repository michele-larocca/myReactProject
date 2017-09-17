// @flow

import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './container/app'
import MainTabs from './container/MainTabHandler'
import helloReducer from './reducer/hello'
import Immutable from 'immutable'
import { Provider } from 'react-redux'
// import 'semantic-ui-css/components/button.min.css'
// import 'semantic-ui-css/components/tab.min.css'
import 'semantic-ui-css/semantic.min.css'

const initialState = Immutable.fromJS({
    message: "Initial Message In Store",
    label: "Click Here"
});

const initialState2 = Immutable.fromJS({
    message: "Initial Message In Store 2",
    label: "Click Here ..."
});

// const initialState = {
//     message: "Initial Message",
//     label: "Click Here",
//     handlerClick: () => alert("Button is Clicked")
// };

let store = createStore(helloReducer, initialState);
let store2 = createStore(helloReducer, initialState2);

const functionTestFlow = (num1: number, num2: number) => {
    return num1 * num2;
};

console.log(`the sum is : ${functionTestFlow('a',5)}`);

ReactDOM.render(
    <Provider store={store2} >
        <MainTabs />
    </ Provider>, 
    document.getElementById("container"));
