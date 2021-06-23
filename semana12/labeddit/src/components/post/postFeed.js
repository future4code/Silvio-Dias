import React,{ useContext } from 'react'
import Card from "../card/Card"
import {GlobalStateContext} from "../../globalstate/GlobalStateContext"
import { goTo } from '../../router/Coordinator'
import { useHistory } from 'react-router-dom'
import Buttons from '../button/buttons'
import Pagination from '../pagination/Pagination';

function PostFeed(props) {
    const {posts} = useContext(GlobalStateContext)
    const history = useHistory()

    const postList = posts && posts.map((post) => {
        return(
            <div>

            
            <div onClick = {() => goTo(history,`/post/${post.id}`)}>

            <Card
            post = {post}
            />
            </div>
            <Buttons
            id = {post.id}
            isPost = {true}
            voted = {post.userVote}
            />
            </div>
            )
            
    })
    return (
        <div>
            {postList}
            <Pagination/>
        </div>
    )
}

export default PostFeed
