import axios from 'axios'
import React, { useContext } from 'react'
import CommentForm from '../components/form/CommentForm'
import PostCard from '../components/post/postCard'
import PostComment from '../components/post/postComment'
import { BASE_URL,headers } from '../constants/url'
import {GlobalStateContext} from "../globalstate/GlobalStateContext"

function ScreenPost() {
    const {idPost,getComments} = useContext(GlobalStateContext)
  

    const sendComment = (body) => {
        axios
        .post(`${BASE_URL}/posts/${idPost}/comments`,body,headers)
        .then((response) => {
            getComments()
        })
        .catch((err) => {

        })
    }

    return (
        <div>
            <PostCard/>
            <CommentForm
            comentar = {sendComment}
            />
            <PostComment/>
        </div>
    )
}

export default ScreenPost
