import React from 'react'
import {ButtonStyle} from './styled'

function Button(props) {
    return (
        <div>   
            <ButtonStyle type = {props.TypeButton} onClick = {props.action} customStyle = {props.customStyle}>
                {props.text}
            </ButtonStyle>
        </div>

    )
}

export default Button
