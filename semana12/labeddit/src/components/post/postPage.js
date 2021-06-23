import React, {useContext} from 'react'
import {GlobalStateContext} from "../../globalstate/GlobalStateContext"
import { useParams } from "react-router-dom";
import Card from '../card/Card';

function PostPage() {
    const params = useParams()
    const {posts,setIdPost} = useContext(GlobalStateContext)

    const post = posts && posts.filter(post => post.id === params.id)

    if(post.length){
        setIdPost(post[0].id)
        return(
            <Card
            post = {post[0]}
            />
        )
    }
}

export default PostPage
