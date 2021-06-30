import React, {useContext} from 'react'
import {GlobalStateContext} from "../../globalstate/GlobalStateContext"
import { useParams } from "react-router-dom";
import Card from '../card/Card';
import SocialButtons from '../button/socialButtons';

function PostPage() {
    const params = useParams()
    const {posts,setIdPost} = useContext(GlobalStateContext)

    const post = posts && posts.filter(post => post.id === params.id)

    if(post.length > 0){
        setIdPost(post[0].id)
        return(
            <div>
                <Card
                    post = {post[0]}
                    typePost = {true}
                />
                <SocialButtons/>
            </div>

        )
    }else{
        return "Carregando..."
    }
}

export default PostPage
