import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = ({label, onClick, className}) => {
    return <button className={className} onClick={onClick}>{label}</button>;
};

const ButtonStyled = styled(Button)`
    min-width: 100px;
    color: white;
    background-color: tomato;
    border: red solid 1px;
    border-radius: 3px;
    cursor: pointer;
    `;

Button.propTypes = {
    label: PropTypes.string,
    handlerClick: PropTypes.func
};

export default ButtonStyled;