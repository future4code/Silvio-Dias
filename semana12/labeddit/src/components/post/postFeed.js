import React,{ useContext } from 'react'
import Card from "../card/Card"
import {GlobalStateContext} from "../../globalstate/GlobalStateContext"
import { goTo } from '../../router/Coordinator'
import { useHistory } from 'react-router-dom'

function PostFeed(props) {
    const {posts} = useContext(GlobalStateContext)
    const history = useHistory()

    const postList = posts && posts.map((post) => {
        return(
            <div onClick = {() => goTo(history,`/post/${post.id}`)}>

            <Card
            post = {post}
            />
            </div>
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
