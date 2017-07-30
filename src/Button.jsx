import React from 'react'

const Button = ({ style, onClick, children }) =>
    <button 
        onClick={onClick}
        style={Object.assign({}, style, {
            padding: '1em 2em',
            borderRadius: 4
        })}
    >
        {children}
    </button>


export default Button
