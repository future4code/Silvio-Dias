import React, {useContext} from 'react'
import {GlobalStateContext} from "../../globalstate/GlobalStateContext"
import { useParams } from "react-router-dom";
import { CardPost } from './style';
import Like from "../button/like"
import Dislike from "../button/dislike"

function PostCard() {
    const params = useParams()
    const {posts} = useContext(GlobalStateContext)
    const post = posts && posts.filter(post => post.id === params.id)

    if(post){
        return(
            <CardPost>
                <h1>{post[0].title}</h1>    
                <p>{post[0].body}</p>
                <Like
                idPost = {post[0].id}
                />
                <Dislike
                idPost = {post[0].id}
                />
                <button>Comentar</button>
            </CardPost>
        )
    }

    return (
        <CardPost>

        </CardPost>
    )
}

export default PostCard
