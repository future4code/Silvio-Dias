import React,{ useContext } from 'react'
import Card from "../card/Card"
import {GlobalStateContext} from "../../globalstate/GlobalStateContext"
import { goTo } from '../../router/Coordinator'
import { useHistory } from 'react-router-dom'
import Buttons from '../button/buttons'


function PostFeed(props) {
    const {posts} = useContext(GlobalStateContext)
    const history = useHistory()

    const postList = posts && posts.map((post) => {
        return(
            <div>
                <Card
                post = {post}
                />
            </div>
            )
            
    })
    return (
        <div>
            {postList}
        </div>
    )
}

export default PostFeed
