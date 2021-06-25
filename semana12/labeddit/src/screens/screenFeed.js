import axios from 'axios'
import React, {useContext} from 'react'
import PostForm from '../components/form/PostForm'
import SearchForm from '../components/form/searchForm'
import PostFeed from '../components/post/postFeed'
import { BASE_URL, headers } from '../constants/url'
import {GlobalStateContext} from "../globalstate/GlobalStateContext"

function ScreenFeed(props) {
    const {getPost,posts} = useContext(GlobalStateContext)

    const sendPost = (body) => {
        axios
        .post(`${BASE_URL}/posts`,body,headers)
        .then((response) => {
            console.log(response)
            getPost()
        })
        .catch((err) => {
            alert(err.message)
        })
    }

    return (
        <div>
            <SearchForm/>
            
            <PostForm
                post = {sendPost}
            
            />

            <PostFeed/>
        </div>
    )
}

export default ScreenFeed
