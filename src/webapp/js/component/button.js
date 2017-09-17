import React from 'react'
import PropTypes from 'prop-types'

const Button = ({label, handlerClick}) => 
    <button onClick={handlerClick}>{label}</button>;

Button.propTypes = {
    label: PropTypes.string,
    handlerClick: PropTypes.func
};

export default Button;