// @flow

import React from 'react';
import Message from '../component/message'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import APP_NAME from '../shared/config'
import { setLabel } from '../action/hello'

const PanelMessage = ({message, label, handlerClick}) =>
    <div>
        <h1>{APP_NAME}</h1>
        <Message {...{message}} />
        <Button onClick={handlerClick} color="blue">{label}</Button>
    </div>;

const mapStateToProps = (state, ownProps) => ({
    message: state.get('message'),
    label: state.get('label'),
    // handlerClick: () => alert("Button is Clicked")
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    handlerClick: () => dispatch(setLabel('Hello!!'))
});

export default connect(mapStateToProps, mapDispatchToProps)(PanelMessage);
