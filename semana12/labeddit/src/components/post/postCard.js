import React, {useContext} from 'react'
import {GlobalStateContext} from "../../globalstate/GlobalStateContext"
import { useParams } from "react-router-dom";

function PostCard() {
    const params = useParams()
    const {posts} = useContext(GlobalStateContext)
    const post = posts && posts.filter(post => post.id === params.id)
    
    return (
        <div>
            <h1>{post && post[0].title}</h1>
        </div>
    )
}

export default PostCard
