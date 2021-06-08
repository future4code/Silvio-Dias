import React from 'react'

function Button(props) {
    return (
        <div>
            <button onClick = {props.action} customStyle = {props.style}>
                {props.texto}
            </button>
        </div>
    )
}

export default Button
