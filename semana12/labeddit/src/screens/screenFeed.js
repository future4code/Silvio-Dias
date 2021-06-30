import axios from 'axios'
import React, {useContext} from 'react'
import PostForm from '../components/form/PostForm'
import PostFeed from '../components/post/postFeed'
import { BASE_URL } from '../constants/url'
import {GlobalStateContext} from "../globalstate/GlobalStateContext"

function ScreenFeed(props) {
    const {getPost,headers} = useContext(GlobalStateContext)

    const sendPost = (body) => { //Envia novo post
        axios
        .post(`${BASE_URL}/posts`,body,headers)
        .then((response) => {
            getPost() //Atualiza lista de post
        })
        .catch((err) => {
            alert(err.response.data)
        })
    }

    return (
        <div>            
            <PostForm
                post = {sendPost}
            />

            <PostFeed/>
        </div>
    )
}

export default ScreenFeed
