// @flow

import React from 'react';
import Message from '../component/message'
import { connect } from 'react-redux'
import APP_NAME from '../shared/config'
import { addMessage, overrideMessages } from '../action/message'
import { showErrorNotification } from '../action/notification'
import { getMessages } from '../selector/message'
import PanelActionsMessage from '../component/panelActionsMessage'
import styled from 'styled-components'

const BoxMessageList = styled.div`
    margin-bottom: 10px;
`;

const PanelMessage = ({messages, onAddMessage, onResetMessages}) =>
    <div>
        <BoxMessageList>
            {messages.map((item) => <Message key={item.id} text={item.text} date={item.date} />)}
        </BoxMessageList>
        <PanelActionsMessage onAddMessage={onAddMessage} onResetMessages={onResetMessages}/>
    </div>;

const mapStateToProps = (state, ownProps) => ({
    messages: getMessages(state),
    // handlerClick: () => alert("Button is Clicked")
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onAddMessage: (text) => {
        dispatch( text ? addMessage(text) : 
            showErrorNotification('Scrivere il Messaggio prima di cliccare sul Pulsante Aggiungi'));
    },
    onResetMessages: (messages) => {
        dispatch(overrideMessages(messages));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PanelMessage);
