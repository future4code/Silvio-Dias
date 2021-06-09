import React from 'react'
import {ButtonStyle} from './styled'

function Button(props) {
    return (
        <div>   
            <ButtonStyle onClick = {props.action} customStyle = {props.style}>
                {props.text}
            </ButtonStyle>
        </div>

    )
}

export default Button
