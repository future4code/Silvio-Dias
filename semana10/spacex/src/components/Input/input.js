import React from 'react'

export function Input(props) {
    return (
        <div>
            <Input 
                styleInput = {props.style}
                placeholder = {props.holder}
                type = {props.typeInput}
                onChange = {props.action}/>
        </div>
    )
}

export default Input
