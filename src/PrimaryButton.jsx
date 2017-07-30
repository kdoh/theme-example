import React from 'react'
import themed from './themed'
import Button from './Button'


const PrimaryButton = ({ theme, onClick, children }) =>
    <Button 
        onClick={onClick}
        style={{
            backgroundColor: theme.primary,
            color: 'white',
            border: 'none' 
        }}
    >
        {children}
    </Button>



export default themed(PrimaryButton)

