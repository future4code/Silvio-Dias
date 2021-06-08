import React from 'react'

function Button(props) {
    return (
        <div>
            <button onClick = {props.action} customStyle = {props.style}>
                {props.text}
            </button>
        </div>
    )
}

export default Button
