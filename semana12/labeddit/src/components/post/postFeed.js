import React,{ useContext } from 'react'
import { CardPost } from "./style"
import {GlobalStateContext} from "../../globalstate/GlobalStateContext"
import { useHistory } from "react-router-dom";
import {goTo} from "../../router/Coordinator"
import Like from "../button/like"
import Dislike from "../button/dislike"

function PostFeed(props) {
    const history = useHistory();
    const {posts} = useContext(GlobalStateContext)
    console.log(posts)
    const postList = posts && posts.map((post) => {
        return(
            <CardPost>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <p>{post.voteSum}</p>

                <Like
                idPost = {post.id}
                voted = {post.userVote}
                post = {true}
                />

                <Dislike
                idPost = {post.id}
                voted = {post.userVote}
                post = {true}
                />

                <button>Comentários {post.commentCount}</button>
                <button onClick = {() => goTo(history,`/post/${post.id}`)} >Ver mais</button>
            </CardPost>
        )
    })
    return (
        <div>
            <h1>FEED</h1>
            {postList}
        </div>
    )
}

export default PostFeed
