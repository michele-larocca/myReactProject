import React from 'react'
import Button from './button'
import styled from 'styled-components'

let input;

const setInputTempValue = (node) => {
    input = node;
};

const clearInputTempValue = () => {
    input.value = "";
};

const clickButton = (executeOnClick) => {
    executeOnClick(input.value);
    clearInputTempValue();
};

const Input = ({className}) => {
    return <input className={className} type="text" placeholder="write your message" ref={setInputTempValue} />
};

const CustomInput = styled(Input)`
    margin-right: 20px;
`;

const ResetButton = styled(Button)`
    position: absolute;
    right: 0px;
`;

const PanelActions = styled.div`
    position: relative;
`;

const executeFetch = (onResetMessages) => {
    console.log('Start fetch ...');

    fetch('/rest/getDeafaultMessages')
    .then((response) => response.json())
    .then((messages) => {
        console.log({messages});
        onResetMessages(messages);
    })
    .catch((erro) => console.erro({error}))

    console.log('End Start fetch ...');
};

const PanelActionsMessage = ({onAddMessage, onResetMessages}) => {
    return (
        <PanelActions>
            <CustomInput />
            <Button onClick={() => clickButton(onAddMessage)} label='Add Message' />
            <ResetButton onClick={() => executeFetch(onResetMessages)} label='Reset Message by ServerValue' />
        </PanelActions>);
};

export default PanelActionsMessage;