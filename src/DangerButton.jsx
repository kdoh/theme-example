import React from 'react'
import themed from './themed'
import Button from './Button'


const DangerButton = ({ theme, onClick, children }) =>
    <Button 
        onClick={onClick}
        style={{
            backgroundColor: theme.danger,
            color: 'white',
            border: 'none' 
        }}
    >
        {children}
    </Button>



export default themed(DangerButton)
