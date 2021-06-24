import React from 'react'
import { useHistory } from 'react-router-dom'
import { CardPost } from './style'

function Card({ post },props) {
    const {id,title,body,
            commentCount,voteSum,userVote,
            username} = post

    const history = useHistory()
    return (
        <CardPost key = {id}>
            <div>
                <h2>{title}</h2>
            </div>
            <div>
                <p>{body}</p>
            </div>
            <div>
                <h3>{username}</h3>
            </div>

            <div>
                {commentCount && (<p>Comentários: {commentCount}</p>)}
                {voteSum && (<p>Avalialão: {voteSum}</p>)} 
            </div>

        </CardPost>
    )
}

export default Card
