import React from 'react'

const TextField = ({
    name,label,...otherProps
}) => {
    const configTextField={
        fullWidth:true,
        variant:'outlined',
        size:'small',
    ...otherProps,
    }
    return (


        <>

<TextField {...configTextField}/>
        </>
    )
    
}

export default TextField
