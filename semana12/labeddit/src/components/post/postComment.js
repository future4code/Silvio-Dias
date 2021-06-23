import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { BASE_URL,headers } from '../../constants/url'
import { CardPost } from './style'
import {GlobalStateContext} from "../../globalstate/GlobalStateContext"

function PostComment() {
    const [comments,setComments] = useState([{}])
    const {idPost} = useContext(GlobalStateContext)

    const getComments = () => {
        if(idPost.length > 1){
            axios
            .get(`${BASE_URL}/posts/${idPost}/comments`,headers)
            .then((response) => {
                setComments(response.data)
            })
            .catch((err) => {
                alert(err.message)
            })
        }
    }

    useEffect(() => {
        getComments()
    }, [idPost])

    const commentsList = comments.length > 1 && comments.map((comment) => {
        return(
            <CardPost>
                <p>{comment.body}</p>
            </CardPost>
        )
    })

    // if(comments.length){
    //     return(
    //         {commentsList}
    //     )
    // }

    return (
        
        <div>
        Carregando
        {commentsList && commentsList}
        </div>
    )
}

export default PostComment
