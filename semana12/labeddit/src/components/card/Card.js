import React from 'react'
import { useHistory } from 'react-router-dom'
import { CardPost,Title,VoteArea,CardArea,SocialComents } from './style'
import Buttons from '../button/buttons';
import SocialButtons from '../button/socialButtons';

function Card({ post },props) {
    const {id,title,body,
            commentCount,voteSum,userVote,
            username} = post

    const history = useHistory()
    return (
        <CardPost key = {id}>
            <VoteArea>
                <Buttons
                id = {id}
                isPost = {true}
                vote = {voteSum}
                voted = {userVote}
                />
            </VoteArea>

            <CardArea>
                <Title>
                    <h2 class="title" data-text= {title} >{title}</h2>
                    <h4>{username}</h4>
                </Title>
                <div>

                </div>
                <div>
                    <p>{body}</p>
                </div>


                <SocialComents>
                    {commentCount ? (<p> &#128172; {commentCount} {commentCount > 1? "Comentários":"Comentário"}</p>): <p> &#128172; Nenhum Comentário</p>}
                    <SocialButtons/>
                </SocialComents>

    


            </CardArea>

        </CardPost>
    )
}

export default Card
