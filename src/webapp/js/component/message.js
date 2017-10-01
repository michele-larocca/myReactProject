// @flow
import React from 'react'
import dateFormat from 'dateformat'
import { printDate } from '../shared/util'
import styled from 'styled-components'

const MessageContainer = styled.div`
    border: blue solid 1px;
    border-radius: 3px;
    background-color: #6495ED;
    color: white;
    margin-bottom: 5px;

    > span {
        font-size: 9px;
        color: white;
    }
`;

const Message = ({text, date}) => 
    <MessageContainer>
        <span>{printDate(date)}</span>
        <p>{text}</p>
    </MessageContainer>;


export default Message;