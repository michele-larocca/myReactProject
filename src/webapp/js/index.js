// @flow

import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import MainTabs from './component/MainTabHandler'
import  Alert from './container/alert'
import reducers from './reducer/index'
import Immutable from 'immutable'
import { Provider } from 'react-redux'

// import App from './container/app'
// import 'semantic-ui-css/components/button.min.css'
// import 'semantic-ui-css/components/tab.min.css'
import 'semantic-ui-css/semantic.min.css'

// const initialState = Immutable.fromJS({
//     message: "Initial Message In Store",
//     label: "Click Here"
// });

// const initialState2 = Immutable.fromJS({
//     message: "Initial Message In Store 2",
//     label: "Click Here ...",
//     cards: [
//         {name: 'card 1'},
//         {name: 'card 2'},
//         {name: 'card 3'},
//         {name: 'card 4'},
//         {name: 'card 5'},
//     ]
// });

const initialState = {
    messages: [],
    cards: [
        {id: '1', name: 'card 1'},
        {id: '2', name: 'card 2'},
        {id: '3', name: 'card 3'},
        {id: '4', name: 'card 4'},
        {id: '5', name: 'card 5'}
    ]
};

let store = createStore(reducers, initialState);

// const functionTestFlow = (num1: number, num2: number) => {
//     return num1 * num2;
// };

// console.log(`the sum is : ${functionTestFlow('a',5)}`);

ReactDOM.render(
    <Provider store={store} >
        <div>
            <MainTabs />
            <Alert />
        </div>
    </ Provider>, 
    document.getElementById("container"));
