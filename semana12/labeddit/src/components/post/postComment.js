import React, { useContext, useEffect, useState } from 'react'
import {GlobalStateContext} from "../../globalstate/GlobalStateContext"
import CommentCard from '../card/commentCard'

function PostComment() {
    const {idPost,comments,getComments} = useContext(GlobalStateContext)

    useEffect(() => {
        getComments()
    }, [idPost])

    const commentsList = comments.length > 0 && comments.map((comment) => {
        return(

            <CommentCard
            post = {comment}
            />

        )
    })

    return (
        
        <div>
        {commentsList}
        </div>
    )
}

export default PostComment
