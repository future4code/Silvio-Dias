import React from 'react'
import {Button} from "./style"

function ButtonForm(props) {
    return (
        <Button onClick = {props.button} >
            {props.text}
        </Button>
    )
}

export default ButtonForm
