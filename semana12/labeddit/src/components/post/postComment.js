import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { BASE_URL,headers } from '../../constants/url'
import { CardPost } from './style'
import {GlobalStateContext} from "../../globalstate/GlobalStateContext"
import Like from "../button/like"
import Dislike from "../button/dislike"

function PostComment() {
    const [comments,setComments] = useState([{}])
    const {idPost} = useContext(GlobalStateContext)

    const getComments = () => {
        if(idPost.length > 1){
            axios
            .get(`${BASE_URL}/posts/${idPost}/comments`,headers)
            .then((response) => {
                setComments(response.data)
                console.log(response.data)
            })
            .catch((err) => {
                alert(err.message)
            })
        }
    }

    useEffect(() => {
        getComments()
    }, [idPost])


    const commentsList = comments.length > 0 && comments.map((comment) => {
        return(
            <CardPost>
                <p>{comment.body}</p>

                <Like
                idPost = {comment.id}
                voted = {comment.userVote}
                post = {false}
                />

                <Dislike
                idPost = {comment.id}
                voted = {comment.userVote}
                post = {false}
                />
            </CardPost>
        )
    })

    return (
        
        <div>
        {commentsList}
        </div>
    )
}

export default PostComment
