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
                <p>{post[0].commentCount}</p>

                <Like
                idPost = {post[0].id}
                voted = {post[0].userVote}
                />

                <Dislike
                idPost = {post[0].id}
                voted = {post[0].userVote}
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
