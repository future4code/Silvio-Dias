import React from 'react'
import Dislike from './dislike'
import Like from './like'

function Buttons(props) {
    console.log(props.isPost)
    return (

        <div>
            <Like
            idPost = {props.id}
            post = {props.isPost}
            voted = {props.voted}
            />
            <p>{props.vote ? props.vote:"0"}</p>
            <Dislike
            idPost = {props.id}
            post = {props.isPost}
            voted = {props.voted}
            />
        </div>
    )
}

export default Buttons
