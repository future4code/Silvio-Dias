import React, { useContext, useEffect, useState } from 'react'
import {GlobalStateContext} from "../../globalstate/GlobalStateContext"
import Like from "../button/like"
import Dislike from "../button/dislike"

function PostComment() {
    const {idPost,comments,getComments} = useContext(GlobalStateContext)

    useEffect(() => {
        getComments()
    }, [idPost])

    const commentsList = comments.length > 0 && comments.map((comment) => {
        return(
            <div>
                <p>{comment.body}</p>
                <p>{comment.username}</p>
                <Like
                idPost = {comment.id}
                voted = {comment.userVote}
                post = {false}
                />
                <h3>{comment.voteSum}</h3>
                <Dislike
                idPost = {comment.id}
                voted = {comment.userVote}
                post = {false}
                />
            </div>
        )
    })

    return (
        
        <div>
        {commentsList}
        </div>
    )
}

export default PostComment
