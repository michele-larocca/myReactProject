import React from 'react'
import styled from 'styled-components'

const DivLarge = styled.div`
    border: #ff5638 solid 1px;
    border-radius: 3px;
    background-color: papayawhip;
    margin: 4px 0;
    padding-left: 5px;
`;

const Div = styled.div`
    color: #ff2700;
    font-weigth: bold;
`;

const Card = (props) => {
    return (
        <DivLarge>
            <Div>This is a Card !</Div> 
            <Div>Name: {props.name}</Div>
        </DivLarge>
    );
};

export default Card;