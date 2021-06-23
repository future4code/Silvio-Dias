import React, {useContext} from 'react'
import {GlobalStateContext} from "../../globalstate/GlobalStateContext"
import { useParams } from "react-router-dom";
import Card from '../card/Card';
import SocialButtons from '../button/socialButtons';
import Buttons from '../button/buttons';

function PostPage() {
    const params = useParams()
    const {posts,setIdPost} = useContext(GlobalStateContext)

    const post = posts && posts.filter(post => post.id === params.id)

    if(post.length){
        setIdPost(post[0].id)
        return(
            <div>
            <Card
                post = {post[0]}
            />
            <Buttons
                id = {post[0].id}
                isPost = {true}
                voted = {post[0].userVote}
            />
            <SocialButtons/>
            </div>

        )
    }
}

export default PostPage
