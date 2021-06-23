import React from 'react'
import Dislike from './dislike'
import Like from './like'

function Buttons(props) {
    return (
        <div>
            <Like
            idPost = {props.id}
            post = {props.isPost}
            voted = {props.voted}
            />

            <Dislike
            idPost = {props.id}
            post = {props.isPost}
            voted = {props.voted}
            />
        </div>
    )
}

export default Buttons
